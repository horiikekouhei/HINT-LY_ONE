import { useState } from 'react';
import { FiSend, FiEdit3 } from 'react-icons/fi';
import type { Room } from '../../types/game';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isGuesser: boolean;
  onSubmit: (hint: string) => void;
  onUndo: () => void;
}

export default function Phase2Hint({ room, playerId, isGuesser, onSubmit, onUndo }: Props) {
  const [hint, setHint] = useState('');
  const round = room.currentRound!;
  const hints = round.hints || {};
  const myHint = hints[playerId];
  const submitted = !!myHint;
  const { t } = useLanguage();

  const players = room.players || {};
  const activeIds = round.activePlayerIds || Object.keys(players);
  const nonGuessers = Object.values(players).filter(p => !p.isGuesser && activeIds.includes(p.id));
  const submittedCount = nonGuessers.filter(p => hints[p.id]).length;

  const handleSubmit = () => {
    const trimmed = hint.trim();
    if (!trimmed || trimmed.split(/\s+/).length > 1) return;
    onSubmit(trimmed);
    setHint('');
  };

  if (isGuesser) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">{t('game.phase2.tagInputting')}</span>
        <div className="guesser-waiting-card card">
          <div className="guesser-icon animate-pulse">🤔</div>
          <h2 className="phase-title">{t('game.phase2.guesserTitle')}</h2>
          <p className="phase-desc" dangerouslySetInnerHTML={{ __html: t('game.phase2.guesserDesc') }} />
          <div className="hint-progress">
            <div className="hint-progress-track">
              {nonGuessers.map(p => (
                <div
                  key={p.id}
                  className={`hint-dot ${hints[p.id] ? 'filled' : ''}`}
                  title={p.name}
                />
              ))}
            </div>
            <span className="hint-progress-text">
              {t('game.phase2.progress', { submitted: submittedCount, total: nonGuessers.length })}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">{t('game.phase2.tagInputting')}</span>
        <div className="submitted-card card animate-fadeInScale">
          <div className="submitted-icon">✅</div>
          <h2 className="phase-title">{t('game.phase2.submittedTitle')}</h2>
          <div className="submitted-hint-box">
            <span className="submitted-hint-label">{t('game.phase2.yourHint')}</span>
            <span className="submitted-hint-word text-gradient">{myHint.text}</span>
          </div>
          <div className="action-group" style={{ marginTop: '16px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => { setHint(myHint.text); onUndo(); }}>
              <FiEdit3 size={14} />
              {t('game.phase2.rewriteBtn')}
            </button>
          </div>
          <p className="phase-desc" style={{ marginTop: '16px' }}>{t('game.phase2.waitingOthers')}</p>
          <div className="hint-progress">
            <div className="hint-progress-track">
              {nonGuessers.map(p => (
                <div
                  key={p.id}
                  className={`hint-dot ${hints[p.id] ? 'filled' : ''}`}
                  title={p.name}
                />
              ))}
            </div>
            <span className="hint-progress-text">
              {t('game.phase2.progress', { submitted: submittedCount, total: nonGuessers.length })}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">{t('game.phase2.tag')}</span>

      {/* お題の再表示（非回答者のみ） */}
      <div className="mini-topic-card animate-fadeInScale">
        <span className="mini-topic-label">{t('game.phase2.topicLabel')}</span>
        <span className="mini-topic-word">{round.topic}</span>
      </div>

      <h2 className="phase-title" dangerouslySetInnerHTML={{ __html: t('game.phase2.inputTitle') }} />
      <p className="phase-desc" dangerouslySetInnerHTML={{ __html: t('game.phase2.inputDesc') }} />

      <div className="hint-input-card card">
        <div className="hint-input-group">
          <FiEdit3 size={20} className="hint-input-icon" />
          <input
            id="hint-input"
            className="input input-lg hint-input"
            type="text"
            placeholder={t('game.phase2.inputPlaceholder')}
            value={hint}
            maxLength={20}
            onChange={e => setHint(e.target.value.replace(/\s/g, ''))}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            autoFocus
          />
        </div>
        {hint.split(/\s+/).length > 1 && (
          <p className="hint-warn">{t('game.phase2.warnOneWord')}</p>
        )}
        <button
          id="btn-submit-hint"
          className="btn btn-primary btn-lg btn-full"
          onClick={handleSubmit}
          disabled={!hint.trim() || hint.split(/\s+/).length > 1}
        >
          <FiSend size={18} />
          {t('game.phase2.submitBtn')}
        </button>
      </div>

      <div className="hint-progress">
        <div className="hint-progress-track">
          {nonGuessers.map(p => (
            <div
              key={p.id}
              className={`hint-dot ${hints[p.id] ? 'filled' : ''}`}
              title={p.name}
            />
          ))}
        </div>
        <span className="hint-progress-text">
          {t('game.phase2.progress', { submitted: submittedCount, total: nonGuessers.length })}
        </span>
      </div>
    </div>
  );
}
