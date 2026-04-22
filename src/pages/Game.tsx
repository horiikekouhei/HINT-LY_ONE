import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import type { RoundResult } from '../types/game';
import Phase1Topic from '../components/phases/Phase1Topic';
import Phase2Hint from '../components/phases/Phase2Hint';
import Phase3Check from '../components/phases/Phase3Check';
import Phase4Guess from '../components/phases/Phase4Guess';
import Phase5Result from '../components/phases/Phase5Result';
import GameSummary from '../components/phases/GameSummary';
import './Game.css';

export default function Game() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { 
    room, 
    playerId, 
    subscribeToRoom,
    selectTopic,
    submitHint,
    toggleEliminate,
    confirmCheck,
    submitGuess,
    finalizeResult,
    goNextRound 
  } = useGameStore();

  // Firebase のリアルタイム同期リスナーを張る
  useEffect(() => {
    if (roomId) {
      const unsubscribe = subscribeToRoom(roomId);
      return () => unsubscribe();
    }
  }, [roomId, subscribeToRoom]);

  // ルームが存在しない場合やロビーに戻った場合の処理
  useEffect(() => {
    if (room === null && roomId) {
      // データのロードが終わった上で null なら、ルームが存在しないか削除された
      // navigate('/');
    }
  }, [room, roomId, navigate]);

  if (!room || !room.currentRound) {
    return (
      <div className="page">
        <div className="spinner" />
      </div>
    );
  }

  const round = room.currentRound;
  const isGuesser = round.guesserId === playerId;
  const isHost = room.hostId === playerId;
  const players = Object.values(room.players || {});
  const totalHints = Object.values(round.hints || {}).filter(h => !h.isEliminated).length;

  return (
    <div className="game-page">
      {/* トップバー */}
      <header className="game-header">
        <div className="game-header-left">
          <span className="game-round-badge badge badge-primary">
            Round {round.roundNumber} / {room.totalRounds}
          </span>
        </div>
        <div className="game-header-center">
          <span className="game-logo-text text-gradient">Just One</span>
        </div>
        <div className="game-header-right">
          <span className="game-score">
            <span className="score-label">スコア</span>
            <span className="score-value text-gradient-gold">{room.score}</span>
          </span>
        </div>
      </header>

      {/* プログレスバー */}
      <div className="game-progress-wrap">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${((room.usedTopics || []).length / room.totalRounds) * 100}%` }}
          />
        </div>
      </div>

      {/* フェーズコンポーネント */}
      <main className="game-main">
        {room.phase === 'phase1_topic' && (
          <Phase1Topic
            room={room}
            playerId={playerId}
            isGuesser={isGuesser}
            isHost={isHost}
            onSelect={(topic) => selectTopic && selectTopic(topic)}
          />
        )}
        {room.phase === 'phase2_hint' && (
          <Phase2Hint
            room={room}
            playerId={playerId}
            isGuesser={isGuesser}
            onSubmit={(hint) => submitHint && submitHint(hint)}
          />
        )}
        {room.phase === 'phase3_check' && (
          <Phase3Check
            room={room}
            playerId={playerId}
            isGuesser={isGuesser}
            isHost={isHost}
            onToggleEliminate={(id) => toggleEliminate && toggleEliminate(id)}
            onConfirm={() => confirmCheck && confirmCheck()}
          />
        )}
        {room.phase === 'phase4_guess' && (
          <Phase4Guess
            room={room}
            isGuesser={isGuesser}
            onSubmit={(guess) => submitGuess && submitGuess(guess)}
          />
        )}
        {room.phase === 'phase5_result' && (
          <Phase5Result
            room={room}
            playerId={playerId}
            isHost={isHost}
            totalHints={totalHints}
            onFinalize={(result: RoundResult) => finalizeResult && finalizeResult(result)}
            onNext={() => goNextRound && goNextRound()}
          />
        )}
        {room.phase === 'summary' && (
          <GameSummary
            room={room}
            onFinish={() => navigate('/')}
          />
        )}
      </main>

      {/* プレイヤーリスト（フッター） */}
      <footer className="game-footer">
        {players.map((p) => (
          <div key={p.id} className={`game-player-chip ${p.isGuesser ? 'guesser' : ''} ${p.id === playerId ? 'me' : ''}`}>
            <span className="chip-avatar">{p.name.charAt(0)}</span>
            <span className="chip-name">{p.name}</span>
            {p.isGuesser && <span className="chip-role">👁️ 回答者</span>}
            {(round.hints || {})[p.id] && !p.isGuesser && <span className="chip-done">✓</span>}
          </div>
        ))}
      </footer>
    </div>
  );
}
