import { FiCheck, FiX, FiSkipForward, FiArrowRight } from 'react-icons/fi';
import type { Room, RoundResult } from '../../types/game';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  onFinalize: (result: RoundResult) => void;
  onNext: () => void;
  onEndFreeMode: () => void;
}

export default function Phase5Result({ room, playerId, onFinalize, onNext, onEndFreeMode }: Props) {
  const round = room.currentRound!;
  const players = room.players || {};
  const hintsObj = round.hints || {};
  const { t } = useLanguage();
  
  const guesser = players[round.guesserId];
  const hintsList = Object.values(hintsObj);
  
  // 進行役の判定
  const activeIds = round.activePlayerIds || Object.keys(players).sort();
  const activeNonGuessers = activeIds.filter(id => id !== round.guesserId);
  const controllerId = round.controllerId || (room.hostId !== round.guesserId ? room.hostId : activeNonGuessers[0]);
  const isController = playerId === controllerId;

  const isPass = round.guess === '__PASS__';
  const hasResult = !!round.result;
  const usedTopics = room.usedTopics || [];
  const isLastRound = !room.isFreeMode && usedTopics.length >= room.totalRounds;

  const resultConfig = {
    correct:   { emoji: '🎉', label: t('game.phase5.correct'),   color: '#6cffa0', grad: 'var(--grad-accent)' },
    incorrect: { emoji: '😢', label: t('game.phase5.incorrect'), color: '#ff6c8a', grad: 'linear-gradient(135deg,#ff4a6c,#ff6c4a)' },
    pass:      { emoji: '⏭️', label: t('game.phase5.pass'),      color: '#ffe06c', grad: 'var(--grad-gold)' },
  };

  const cfg = round.result ? resultConfig[round.result] : null;

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">{t('game.phase5.tag')}</span>

      {/* 正解のお題 */}
      <div className="result-topic-row">
        <span className="result-topic-label">{t('game.phase5.answerWas')}</span>
        <span className="result-topic-word text-gradient">{round.topic}</span>
      </div>

      {/* 回答者の回答 */}
      <div className="result-guess-box card">
        <span className="result-box-label">{t('game.phase5.guesserWas')} {guesser?.name}</span>
        {isPass ? (
          <span className="result-guess-word" style={{ color: '#ffe06c' }}>({t('game.phase5.pass')})</span>
        ) : round.guess ? (
          <span className="result-guess-word">{round.guess}</span>
        ) : (
          <span className="result-guess-word text-muted">...</span>
        )}
      </div>

      {/* 使われたヒント */}
      <div className="result-hints-row">
        <span className="result-box-label" style={{ marginBottom: 8 }}>{t('game.phase5.hintList')}</span>
        <div className="result-hints-grid">
          {hintsList.map(h => (
            <span
              key={h.playerId}
              className={`result-hint-chip ${h.isEliminated ? 'eliminated-chip' : 'valid-chip'}`}
            >
              {h.isEliminated && <FiX size={12} />}
              {h.text}
            </span>
          ))}
        </div>
      </div>

      {/* 判定ボタン */}
      {!hasResult && isController && round.guess && (
        <div className="result-judge-section">
          <div className="result-judge-buttons">
            <button
              id="btn-result-correct"
              className="btn btn-accent btn-lg"
              onClick={() => onFinalize('correct')}
            >
              <FiCheck size={22} /> {t('game.phase5.correct')}
            </button>
            {isPass ? (
              <button
                id="btn-result-pass"
                className="btn btn-secondary btn-lg"
                onClick={() => onFinalize('pass')}
              >
                <FiSkipForward size={20} /> {t('game.phase5.pass')}
              </button>
            ) : (
              <button
                id="btn-result-incorrect"
                className="btn btn-danger btn-lg"
                onClick={() => onFinalize('incorrect')}
              >
                <FiX size={22} /> {t('game.phase5.incorrect')}
              </button>
            )}
          </div>
        </div>
      )}

      {!hasResult && !isController && (
        <p className="phase-desc animate-pulse">{t('game.phase2.waitingOthers')}</p>
      )}

      {/* 結果表示 */}
      {hasResult && cfg && (
        <div className="result-announce animate-fadeInScale">
          <div className="result-emoji animate-bounce">{cfg.emoji}</div>
          <p className="result-label" style={{ background: cfg.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {cfg.label}
          </p>
          <div className="result-score-row">
            <span className="result-score-value text-gradient-gold">{room.score} / {usedTopics.length}</span>
          </div>

          {isController && (
            <div className="action-group" style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
              <button
                id="btn-next-round"
                className="btn btn-primary btn-lg btn-full"
                onClick={onNext}
              >
                <FiArrowRight size={20} />
                {isLastRound ? t('game.phase5.viewResultBtn') : t('game.phase5.nextRoundBtn')}
              </button>

              {room.isFreeMode && (
                <button
                  id="btn-end-free-mode"
                  className="btn btn-secondary btn-full"
                  onClick={() => window.confirm(t('game.phase5.endFreeModeBtn')) && onEndFreeMode()}
                >
                  {t('game.phase5.endFreeModeBtn')}
                </button>
              )}
            </div>
          )}
          {!isController && (
            <p className="phase-desc animate-pulse">{t('game.phase2.waitingOthers')}</p>
          )}
        </div>
      )}
    </div>
  );
}
