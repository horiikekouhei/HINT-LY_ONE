import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiUsers, FiCopy, FiPlay, FiCheck } from 'react-icons/fi';
import { useGameStore } from '../store/gameStore';
import './WaitingRoom.css';

export default function WaitingRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { 
    room, 
    playerId, 
    error, 
    subscribeToRoom,
    startRound 
  } = useGameStore();
  
  const [copied, setCopied] = useState(false);

  // Firebase のリアルタイム同期リスナーを張る
  useEffect(() => {
    if (roomId) {
      const unsubscribe = subscribeToRoom(roomId);
      return () => unsubscribe();
    }
  }, [roomId, subscribeToRoom]);

  // ゲームが始まったら自動で遷移
  useEffect(() => {
    if (room && room.phase !== 'waiting') {
      navigate(`/game/${room.id}`);
    }
  }, [room, navigate]);

  const copyRoomId = async () => {
    if (!roomId) return;
    await navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onStartGame = async () => {
    if (!room || !startRound) return;
    await startRound();
  };

  const isHost = room?.hostId === playerId;
  const players = room ? Object.values(room.players) : [];
  const canStart = players.length >= 2;

  if (!room) {
    return (
      <div className="page">
        <div className="spinner" />
        {error && <p className="error-msg">{error}</p>}
      </div>
    );
  }

  return (
    <div className="page waiting-page">
      {/* ヘッダー */}
      <div className="waiting-header animate-fadeIn">
        <span className="badge badge-accent">🎮 待機中</span>
        <h1 className="waiting-title">みんなを待っています...</h1>
        <p className="text-muted waiting-subtitle">
          このIDを友達に教えて一緒に遊ぼう！
        </p>
      </div>

      {/* ルームID */}
      <div className="room-id-card card animate-fadeIn delay-1">
        <p className="room-id-label">ルームID</p>
        <div className="room-id-display">
          <span className="room-id-text text-gradient">{room.id}</span>
          <button
            id="btn-copy-room-id"
            className="btn btn-secondary btn-sm"
            onClick={copyRoomId}
          >
            <span key={copied ? 'check' : 'copy'} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              {copied ? 'コピー済み' : 'コピー'}
            </span>
          </button>
        </div>
      </div>

      {/* プレイヤーリスト */}
      <div className="players-card card animate-fadeIn delay-2">
        <div className="players-header">
          <FiUsers size={18} />
          <span>参加者 ({players.length}人)</span>
        </div>
        <ul className="players-list">
          {players.map((p, i) => (
            <li key={p.id} className={`player-item animate-fadeIn delay-${Math.min(i + 1, 5)}`}>
              <div className="player-avatar">{p.name.charAt(0).toUpperCase()}</div>
              <span className="player-name">{p.name}</span>
              <div className="player-badges">
                {p.id === playerId && <span className="badge badge-primary">あなた</span>}
                {p.isHost && <span className="badge badge-gold">👑 ホスト</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 開始ボタン（ホストのみ） */}
      {isHost && (
        <div className="start-section animate-fadeIn delay-3">
          {!canStart && (
            <p className="start-notice">あと {2 - players.length} 人以上必要です</p>
          )}
          <button
            id="btn-start-game"
            className="btn btn-primary btn-lg"
            onClick={onStartGame}
            disabled={!canStart}
          >
            <FiPlay size={20} />
            ゲームを開始する
          </button>
        </div>
      )}

      {!isHost && (
        <p className="waiting-for-host animate-pulse text-muted">
          ホストがゲームを開始するのを待っています...
        </p>
      )}
    </div>
  );
}
