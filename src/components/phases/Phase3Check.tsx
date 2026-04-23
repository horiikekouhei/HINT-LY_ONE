import { FiCheck, FiX } from 'react-icons/fi';
import type { Room } from '../../types/game';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isGuesser: boolean;
  onToggleEliminate: (targetPlayerId: string) => void;
  onConfirm: () => void;
}

export default function Phase3Check({ room, playerId, isGuesser, onToggleEliminate, onConfirm }: Props) {
  const round = room.currentRound!;
  const hintsObj = round.hints || {};
  const hints = Object.values(hintsObj);
  const validCount = hints.filter(h => !h.isEliminated).length;
  const { t } = useLanguage();

  if (isGuesser) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">{t('game.phase3.tagChecking')}</span>
        <div className="guesser-waiting-card card">
          <div className="guesser-icon animate-pulse">🔍</div>
          <h2 className="phase-title">{t('game.phase3.guesserTitle')}</h2>
          <p className="phase-desc" dangerouslySetInnerHTML={{ __html: t('game.phase3.guesserDesc') }} />
        </div>
      </div>
    );
  }

  // 進行役の判定
  const players = room.players || {};
  const activeIds = round.activePlayerIds || Object.keys(players).sort();
  const activeNonGuessers = activeIds.filter(id => id !== round.guesserId);
  const controllerId = round.controllerId || (room.hostId !== round.guesserId ? room.hostId : activeNonGuessers[0]);
  const isController = playerId === controllerId;

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">{t('game.phase3.tag')}</span>
      <h2 className="phase-title" dangerouslySetInnerHTML={{ __html: t('game.phase3.checkTitle') }} />
      <p className="phase-desc" dangerouslySetInnerHTML={{ __html: t('game.phase3.checkDesc') }} />

      <div className="check-hints-grid">
        {hints.map((hint, i) => (
          <button
            key={hint.playerId}
            id={`hint-check-${hint.playerId}`}
            className={`hint-check-card animate-fadeIn delay-${Math.min(i + 1, 5)} ${hint.isEliminated ? 'eliminated' : ''}`}
            onClick={() => onToggleEliminate(hint.playerId)}
          >
            <span className="hint-check-word">{hint.text}</span>
            <span className="hint-check-name">{hint.playerName}</span>
            <div className="hint-check-overlay">
              <FiX size={32} />
              <span>{t('game.phase3.eliminated')}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="check-summary">
        <span className="check-valid-count">
          {t('game.phase3.valid')}: <strong className="text-gradient-accent">{validCount}</strong>
        </span>
      </div>

      {isController ? (
        <button
          id="btn-confirm-elimination"
          className="btn btn-primary btn-lg"
          onClick={onConfirm}
        >
          <FiCheck size={20} />
          {t('game.phase3.confirmBtn')}
        </button>
      ) : (
        <p className="phase-desc animate-pulse">{t('game.phase2.waitingOthers')}</p>
      )}
    </div>
  );
}
