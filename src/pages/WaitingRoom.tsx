import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiUsers, FiCopy, FiPlay, FiCheck } from 'react-icons/fi';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';
import './WaitingRoom.css';

export default function WaitingRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { 
    room, 
    playerId, 
    error, 
    subscribeToRoom,
    startRound,
    kickPlayer,
    leaveRoom
  } = useGameStore();
  const { t } = useLanguage();
  
  const [copied, setCopied] = useState(false);

  // Firebase のリアルタイム同期リスナーを張る
  useEffect(() => {
    if (roomId) {
      const unsubscribe = subscribeToRoom(roomId);
      return () => unsubscribe();
    }
  }, [roomId, subscribeToRoom]);

  // 自身が部屋からいなくなった場合（キックされた場合）
  useEffect(() => {
    if (room && playerId && !room.players[playerId]) {
      alert(t('waiting.kickedDesc'));
      navigate('/');
    }
  }, [room, playerId, navigate, t]);


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
        <span className="badge badge-accent">{t('waiting.waitingTag')}</span>
        <h1 className="waiting-title">{t('waiting.waitingTitle')}</h1>
        <p className="text-muted waiting-subtitle">
          {t('waiting.waitingSubtitle')}
        </p>
      </div>

      {/* ルームID */}
      <div className="room-id-card card animate-fadeIn delay-1">
        <p className="room-id-label">{t('waiting.roomIdLabel')}</p>
        <div className="room-id-display">
          <span className="room-id-text text-gradient">{room.id}</span>
          <button
            id="btn-copy-room-id"
            className="btn btn-secondary btn-sm"
            onClick={copyRoomId}
          >
            <span key={copied ? 'check' : 'copy'} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              {copied ? t('waiting.copied') : t('waiting.copy')}
            </span>
          </button>
        </div>
      </div>

      {/* プレイヤーリスト */}
      <div className="players-card card animate-fadeIn delay-2">
        <div className="players-header">
          <FiUsers size={18} />
          <span>{t('waiting.players', { count: players.length })}</span>
        </div>
        <ul className="players-list">
          {players.map((p, i) => (
            <li key={p.id} className={`player-item animate-fadeIn delay-${Math.min(i + 1, 5)}`}>
              <div className="player-avatar">{p.name.charAt(0).toUpperCase()}</div>
              <span className="player-name">{p.name}</span>
              <div className="player-badges">
                {p.id === playerId && <span className="badge badge-primary">{t('waiting.you')}</span>}
                {p.isHost && <span className="badge badge-gold">{t('waiting.host')}</span>}
                {isHost && p.id !== playerId && (
                  <button 
                    className="btn-kick" 
                    onClick={() => window.confirm(t('waiting.kickConfirm')) && kickPlayer && kickPlayer(p.id)}
                    title={t('waiting.kick')}
                  >
                    ✕
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 開始ボタン（ホストのみ） */}
      {isHost && (
        <div className="start-section animate-fadeIn delay-3">
          {!canStart && (
            <p className="start-notice">{t('waiting.needMore', { count: 2 - players.length })}</p>
          )}
          <button
            id="btn-start-game"
            className="btn btn-primary btn-lg"
            onClick={onStartGame}
            disabled={!canStart}
          >
            <FiPlay size={20} />
            {t('waiting.startGame')}
          </button>
        </div>
      )}

      {/* 退出ボタン */}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <button
          className="btn btn-secondary btn-sm"
          onClick={async () => {
            if (leaveRoom) await leaveRoom();
            navigate('/');
          }}
        >
          {t('game.common.leave')}
        </button>
      </div>

      {!isHost && (
        <p className="waiting-for-host animate-pulse text-muted">
          {t('waiting.waitingForHost')}
        </p>
      )}
    </div>
  );
}
