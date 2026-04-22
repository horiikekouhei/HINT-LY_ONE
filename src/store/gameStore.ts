import { useState, useCallback } from 'react';
import { ref, set, onValue, update, get } from 'firebase/database';
import { db } from '../firebase/config';
import type { Room, Player, Round, Hint, RoundResult } from '../types/game';
import { TOPIC_LIST } from '../data/topics';

// ランダムIDを生成
export function generateId(length = 6): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// プレイヤーIDをセッションストレージに保存・取得
const PLAYER_ID_KEY = 'onlywanword_player_id';
export function getOrCreatePlayerId(): string {
  let id = sessionStorage.getItem(PLAYER_ID_KEY);
  if (!id) {
    id = generateId(8);
    sessionStorage.setItem(PLAYER_ID_KEY, id);
  }
  return id;
}

// Firebase 向けにオブジェクトをクリーンアップ（undefined を削除）
function cleanForFirebase(obj: any) {
  const newObj = { ...obj };
  Object.keys(newObj).forEach(key => {
    if (newObj[key] === undefined) {
      delete newObj[key];
    }
  });
  return newObj;
}

// ============================================================
// Firebase 操作関数
// ============================================================

export async function createRoomInFirebase(hostId: string, hostName: string): Promise<Room> {
  const roomId = generateId(6);
  const shuffled = [...TOPIC_LIST].sort(() => Math.random() - 0.5);

  const host: Player = {
    id: hostId,
    name: hostName,
    isHost: true,
    isGuesser: false,
  };

  const room: Room = {
    id: roomId,
    hostId,
    phase: 'waiting',
    players: { [hostId]: host },
    score: 0,
    totalRounds: 13,
    topicList: shuffled,
    usedTopics: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  await set(ref(db, `rooms/${roomId}`), cleanForFirebase(room));
  return room;
}

export async function joinRoomInFirebase(roomId: string, playerId: string, playerName: string): Promise<boolean> {
  const roomRef = ref(db, `rooms/${roomId}`);
  const snapshot = await get(roomRef);
  
  if (!snapshot.exists()) return false;
  const room = snapshot.val() as Room;
  if (room.phase !== 'waiting') return false;

  const player: Player = {
    id: playerId,
    name: playerName,
    isHost: false,
    isGuesser: false,
  };

  await update(ref(db, `rooms/${roomId}/players`), {
    [playerId]: cleanForFirebase(player)
  });
  await update(roomRef, { updatedAt: Date.now() });
  return true;
}

export async function startRoundInFirebase(room: Room): Promise<void> {
  const players = room.players || {};
  const playerIds = Object.keys(players);
  const usedTopics = room.usedTopics || [];
  const roundIndex = usedTopics.length;
  const guesserId = playerIds[roundIndex % playerIds.length];
  
  const topicList = room.topicList || TOPIC_LIST;
  const remainingTopics = topicList.filter(t => !usedTopics.includes(t));
  const options = [...remainingTopics].sort(() => Math.random() - 0.5).slice(0, 5);

  const updatedPlayers: Record<string, Player> = {};
  for (const [id, p] of Object.entries(players)) {
    updatedPlayers[id] = { ...p, isGuesser: id === guesserId, isEliminated: false };
    delete updatedPlayers[id].hint;
  }

  const round: Round = {
    roundNumber: roundIndex + 1,
    topic: '',
    options,
    guesserId,
    hints: {},
  };

  const updates: any = {
    [`rooms/${room.id}/players`]: updatedPlayers,
    [`rooms/${room.id}/phase`]: 'phase1_topic',
    [`rooms/${room.id}/currentRound`]: cleanForFirebase(round),
    [`rooms/${room.id}/updatedAt`]: Date.now(),
  };

  await update(ref(db), updates);
}

export async function selectTopicInFirebase(room: Room, topic: string): Promise<void> {
  if (!room.currentRound) return;

  const usedTopics = room.usedTopics || [];
  const updates: any = {
    [`rooms/${room.id}/currentRound/topic`]: topic,
    [`rooms/${room.id}/phase`]: 'phase2_hint',
    [`rooms/${room.id}/usedTopics`]: [...usedTopics, topic],
    [`rooms/${room.id}/updatedAt`]: Date.now(),
  };

  await update(ref(db), updates);
}

export async function submitHintInFirebase(room: Room, playerId: string, hintText: string): Promise<void> {
  if (!room.currentRound) return;

  const hint: Hint = {
    playerId,
    playerName: room.players[playerId]?.name ?? '?',
    text: hintText.trim(),
    isEliminated: false,
  };

  const players = room.players || {};
  const nonGuessers = Object.keys(players).filter(id => id !== room.currentRound!.guesserId);
  const currentHints = { ...(room.currentRound.hints || {}), [playerId]: hint };
  const allSubmitted = nonGuessers.every(id => currentHints[id]);

  const updates: any = {
    [`rooms/${room.id}/currentRound/hints/${playerId}`]: cleanForFirebase(hint),
    [`rooms/${room.id}/phase`]: allSubmitted ? 'phase3_check' : 'phase2_hint',
    [`rooms/${room.id}/updatedAt`]: Date.now(),
  };

  await update(ref(db), updates);
}

export async function toggleEliminateInFirebase(room: Room, targetId: string): Promise<void> {
  if (!room.currentRound || !room.currentRound.hints) return;
  const currentStatus = room.currentRound.hints[targetId]?.isEliminated ?? false;

  await update(ref(db, `rooms/${room.id}/currentRound/hints/${targetId}`), {
    isEliminated: !currentStatus
  });
  await update(ref(db, `rooms/${room.id}`), { updatedAt: Date.now() });
}

export async function confirmCheckInFirebase(room: Room): Promise<void> {
  await update(ref(db, `rooms/${room.id}`), {
    phase: 'phase4_guess',
    updatedAt: Date.now()
  });
}

export async function submitGuessInFirebase(room: Room, guess: string): Promise<void> {
  const updates: any = {
    [`rooms/${room.id}/currentRound/guess`]: guess.trim(),
    [`rooms/${room.id}/phase`]: 'phase5_result',
    [`rooms/${room.id}/updatedAt`]: Date.now(),
  };
  await update(ref(db), updates);
}

export async function finalizeResultInFirebase(room: Room, result: RoundResult): Promise<void> {
  const newScore = result === 'correct' ? room.score + 1 : room.score;
  const updates: any = {
    [`rooms/${room.id}/currentRound/result`]: result,
    [`rooms/${room.id}/score`]: newScore,
    [`rooms/${room.id}/updatedAt`]: Date.now(),
  };
  await update(ref(db), updates);
}

export async function goNextRoundInFirebase(room: Room): Promise<void> {
  const usedTopics = room.usedTopics || [];
  const isLastRound = usedTopics.length >= room.totalRounds;
  if (isLastRound) {
    await update(ref(db, `rooms/${room.id}`), {
      phase: 'summary',
      updatedAt: Date.now()
    });
  } else {
    await startRoundInFirebase(room);
  }
}

// ============================================================
// カスタムフック: useGameStore
// ============================================================
export function useGameStore() {
  const [room, setRoom] = useState<Room | null>(null);
  const [playerId] = useState<string>(() => getOrCreatePlayerId());
  const [playerName, setPlayerName] = useState<string>(
    () => sessionStorage.getItem('onlywanword_player_name') ?? ''
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const savePlayerName = useCallback((name: string) => {
    setPlayerName(name);
    sessionStorage.setItem('onlywanword_player_name', name);
  }, []);

  const subscribeToRoom = useCallback((roomId: string) => {
    const roomRef = ref(db, `rooms/${roomId}`);
    return onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRoom(data as Room);
      } else {
        setRoom(null);
      }
    });
  }, []);

  const handleCreateRoom = useCallback(async () => {
    if (!playerName.trim()) { setError('名前を入力してください'); return; }
    setIsLoading(true);
    try {
      const newRoom = await createRoomInFirebase(playerId, playerName);
      setRoom(newRoom);
      return newRoom;
    } catch (e) {
      setError('ルームの作成に失敗しました');
    } finally {
      setIsLoading(false);
    }
  }, [playerId, playerName]);

  const handleJoinRoom = useCallback(async (roomId: string) => {
    if (!playerName.trim()) { setError('名前を入力してください'); return null; }
    setIsLoading(true);
    try {
      const success = await joinRoomInFirebase(roomId.toUpperCase(), playerId, playerName);
      if (!success) {
        setError('ルームが見つからないか、満員または開始済みです');
        return null;
      }
      return { id: roomId.toUpperCase() };
    } catch (e) {
      setError('参加に失敗しました');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [playerId, playerName]);

  const actions = {
    startRound: () => room && startRoundInFirebase(room),
    selectTopic: (topic: string) => room && selectTopicInFirebase(room, topic),
    submitHint: (hint: string) => room && submitHintInFirebase(room, playerId, hint),
    toggleEliminate: (id: string) => room && toggleEliminateInFirebase(room, id),
    confirmCheck: () => room && confirmCheckInFirebase(room),
    submitGuess: (guess: string) => room && submitGuessInFirebase(room, guess),
    finalizeResult: (result: RoundResult) => room && finalizeResultInFirebase(room, result),
    goNextRound: () => room && goNextRoundInFirebase(room),
  };

  return {
    room, setRoom,
    playerId,
    playerName, savePlayerName,
    isLoading,
    error, setError,
    handleCreateRoom,
    handleJoinRoom,
    subscribeToRoom,
    ...actions
  };
}
