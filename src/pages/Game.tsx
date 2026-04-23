import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import type { RoundResult } from '../types/game';
import Phase1Topic from '../components/phases/Phase1Topic';
import Phase2Hint from '../components/phases/Phase2Hint';
import Phase3Check from '../components/phases/Phase3Check';
import Phase4Guess from '../components/phases/Phase4Guess';
import Phase5Result from '../components/phases/Phase5Result';
import GameSummary from '../components/phases/GameSummary';
import { useLanguage } from '../i18n/LanguageContext';
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
    undoSubmitHint,
    toggleEliminate,
    confirmCheck,
    submitGuess,
    finalizeResult,
    goNextRound,
    kickPlayer,
    leaveRoom,
    abortRound,
    endFreeMode
  } = useGameStore();
  const { t } = useLanguage();

  // Firebase のリアルタイム同期リスナーを張る
  useEffect(() => {
    if (roomId) {
      const unsubscribe = subscribeToRoom(roomId);
      return () => unsubscribe();
    }
  }, [roomId, subscribeToRoom]);

  // 自身が部屋からいなくなった場合（キックされた場合）
  useEffect(() => {
    if (room && !room.players[playerId]) {
      navigate('/');
    }
  }, [room, playerId, navigate]);

  const abortedRoundNumberRef = useRef(-1);

  // 誰かアクティブプレイヤーが抜けた場合（切断など）、ホスト（または代わりの進行役）がラウンドをスキップする
  useEffect(() => {
    if (!room || room.phase === 'waiting' || room.phase === 'summary' || room.phase === 'phase5_result') {
      return;
    }
    
    const activeIds = room.currentRound?.activePlayerIds;
    if (!activeIds) return;
    
    const currentPlayers = Object.keys(room.players || {}).sort();
    const missingActivePlayers = activeIds.filter(id => !currentPlayers.includes(id));

    if (missingActivePlayers.length > 0 && abortedRoundNumberRef.current !== room.currentRound.roundNumber) {
      const controller = currentPlayers.includes(room.hostId) ? room.hostId : currentPlayers[0];
      if (playerId === controller) {
        abortedRoundNumberRef.current = room.currentRound.roundNumber;
        if (abortRound) abortRound();
      }
    }
  }, [room, playerId, abortRound]);

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

  return (
    <div className="game-page">
      {/* トップバー */}
      <header className="game-header">
        <div className="game-header-left">
          <span className="game-round-badge badge badge-primary">
            {room.isFreeMode ? 'Free Mode' : `Round ${round.roundNumber} / ${room.totalRounds}`}
          </span>
        </div>
        <div className="game-header-center">
          <span className="game-logo-text text-gradient notranslate" translate="no">HINT-LY ONE</span>
          {room.isFreeMode && isHost && (
            <button 
              className="btn btn-secondary btn-xs" 
              style={{ marginLeft: '12px', fontSize: '0.7rem' }}
              onClick={() => window.confirm(t('game.phase5.endFreeModeBtn')) && endFreeMode && endFreeMode()}
            >
              {t('game.common.endGame')}
            </button>
          )}
        </div>
        <div className="game-header-right">
          <span className="game-score">
            <span className="score-label">{t('game.common.scoreLabel')}</span>
            <span className="score-value text-gradient-gold">{room.score}</span>
          </span>
        </div>
      </header>

      {/* プログレスバー */}
      {!room.isFreeMode && (
        <div className="game-progress-wrap">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${((room.usedTopics || []).length / room.totalRounds) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* フェーズコンポーネント */}
      <main className="game-main">
        {room.phase !== 'summary' && round.activePlayerIds && !round.activePlayerIds.includes(playerId) ? (
          <div className="phase-container animate-fadeIn">
            <span className="phase-tag">{t('game.phase1.tag')}</span>
            <div className="guesser-waiting-card card">
              <div className="guesser-icon animate-pulse">⏳</div>
              <h2 className="phase-title">{t('game.phase2.waitingOthers')}</h2>
              <p className="phase-desc">{t('game.phase2.joiningNextRound')}</p>
            </div>
          </div>
        ) : (
          <>
            {room.phase === 'phase1_topic' && (
              <Phase1Topic
                room={room}
                playerId={playerId}
                isGuesser={isGuesser}
                onSelect={(topic) => selectTopic && selectTopic(topic)}
              />
            )}
        {room.phase === 'phase2_hint' && (
          <Phase2Hint
            room={room}
            playerId={playerId}
            isGuesser={isGuesser}
            onSubmit={(hint) => submitHint && submitHint(hint)}
            onUndo={() => undoSubmitHint && undoSubmitHint()}
          />
        )}
        {room.phase === 'phase3_check' && (
          <Phase3Check
            room={room}
            playerId={playerId}
            isGuesser={isGuesser}
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
            onFinalize={(result: RoundResult) => finalizeResult && finalizeResult(result)}
            onNext={() => goNextRound && goNextRound()}
            onEndFreeMode={() => endFreeMode && endFreeMode()}
          />
        )}
        {room.phase === 'summary' && (
          <GameSummary
            room={room}
            onFinish={() => {
              navigate('/');
            }}
          />
        )}
          </>
        )}
      </main>

      {/* プレイヤーリスト（フッター） */}
      <footer className="game-footer">
        {players.map((p) => (
          <div key={p.id} className={`game-player-chip ${p.isGuesser ? 'guesser' : ''} ${p.id === playerId ? 'me' : ''}`}>
            <span className="chip-avatar">{p.name.charAt(0)}</span>
            <span className="chip-name">{p.name}</span>
            {p.isGuesser && <span className="chip-role">👁️ {t('game.common.guesserRole')}</span>}
            {(round.hints || {})[p.id] && !p.isGuesser && <span className="chip-done">✓</span>}
            {isHost && p.id !== playerId && (
              <button 
                className="chip-kick" 
                onClick={() => window.confirm(t('waiting.kickConfirm')) && kickPlayer && kickPlayer(p.id)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button 
          className="game-player-chip btn-leave" 
          onClick={async () => {
            if (leaveRoom) await leaveRoom();
            navigate('/');
          }}
          style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.1)' }}
        >
          🚪 {t('game.common.leave')}
        </button>
      </footer>
    </div>
  );
}
