import { FiEyeOff, FiCheckCircle } from 'react-icons/fi';
import type { Room } from '../../types/game';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isGuesser: boolean;
  isHost: boolean;
  onSelect: (topic: string) => void;
}

export default function Phase1Topic({ room, playerId, isGuesser, onSelect }: Props) {
  const round = room.currentRound!;
  const options = round.options || [];
  const { t } = useLanguage();

  // 進行役の判定：ホスト、またはホストが回答者の場合は回答者以外の誰か
  const players = room.players || {};
  const playerIds = Object.keys(players).sort();
  const activeNonGuessers = playerIds.filter(id => id !== round.guesserId);
  const controllerId = room.hostId !== round.guesserId ? room.hostId : activeNonGuessers[0];
  const isController = playerId === controllerId;

  if (isGuesser) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">{t('game.phase1.tagChoosing')}</span>
        <div className="topic-card animate-fadeInScale">
          <FiEyeOff size={32} color="rgba(255,255,255,0.5)" style={{ marginBottom: 12 }} />
          <p className="topic-hidden">？？？</p>
        </div>
        <h2 className="phase-title" dangerouslySetInnerHTML={{ __html: t('game.phase1.guesserTitle') }} />
        <p className="phase-desc" dangerouslySetInnerHTML={{ __html: t('game.phase1.guesserDesc') }} />
      </div>
    );
  }

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">{t('game.phase1.tag')}</span>
      
      {isController ? (
        <>
          <h2 className="phase-title" dangerouslySetInnerHTML={{ __html: t('game.phase1.chooseTitle') }} />
          <p className="phase-desc" dangerouslySetInnerHTML={{ __html: t('game.phase1.chooseDesc') }} />

          <div className="topic-options-grid">
            {options.map((option, i) => (
              <button
                key={option}
                id={`topic-option-${i}`}
                className={`topic-option-btn animate-fadeIn delay-${Math.min(i + 1, 5)}`}
                onClick={() => onSelect(option)}
              >
                <span className="option-number">{i + 1}</span>
                <span className="option-text">{option}</span>
                <FiCheckCircle className="option-check" />
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="topic-card animate-fadeInScale">
            <FiEyeOff size={32} color="rgba(255,255,255,0.5)" style={{ marginBottom: 12 }} />
            <p className="topic-hidden">CHOOSING</p>
          </div>
          <h2 className="phase-title" dangerouslySetInnerHTML={{ __html: t('game.phase1.choosingTitle') }} />
          <p className="phase-desc animate-pulse" dangerouslySetInnerHTML={{ __html: t('game.phase1.choosingDesc') }} />
        </>
      )}
    </div>
  );
}
