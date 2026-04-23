import { FaTrophy, FaHome, FaMedal } from 'react-icons/fa';
import type { Room } from '../../types/game';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../pages/Game.css';

interface Props {
  room: Room;
  onFinish: () => void;
}

export default function GameSummary({ room, onFinish }: Props) {
  const { score, totalRounds } = room;
  const ratio = score / totalRounds;
  const { t } = useLanguage();

  // スコアに応じた称号とメッセージの定義
  const getAward = () => {
    if (ratio >= 1.0) return { title: t('game.summary.evaluation.perfect'), message: '', emoji: '👑', color: 'var(--grad-gold)' };
    if (ratio >= 0.8) return { title: t('game.summary.evaluation.great'), message: '', emoji: '🌟', color: 'var(--grad-accent)' };
    if (ratio >= 0.6) return { title: t('game.summary.evaluation.good'), message: '', emoji: '✨', color: 'var(--clr-primary-light)' };
    if (ratio >= 0.4) return { title: t('game.summary.evaluation.normal'), message: '', emoji: '👍', color: 'var(--clr-text)' };
    return { title: t('game.summary.evaluation.poor'), message: '', emoji: '🌱', color: 'var(--clr-text-muted)' };
  };

  const award = getAward();

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">{t('game.summary.title')}</span>
      
      <div className="summary-card card animate-fadeInScale">
        <div className="summary-trophy animate-float">
          <FaTrophy size={60} color="#ffe06c" />
        </div>
        
        <h2 className="summary-score-title">{t('game.summary.scoreTitle')}</h2>
        <div className="summary-score-value text-gradient-gold">
          {score} <span className="summary-score-total">/ {totalRounds}</span>
        </div>

        <div className="award-box animate-fadeIn delay-2">
          <div className="award-emoji">{award.emoji}</div>
          <h3 className="award-title" style={{ color: award.color }}>{award.title}</h3>
        </div>

        <div className="summary-stats">
          <div className="stat-item">
            <FaMedal />
            <span>{Math.round(ratio * 100)}%</span>
          </div>
        </div>

        <button
          id="btn-return-lobby"
          className="btn btn-primary btn-lg btn-full"
          onClick={onFinish}
        >
          <FaHome size={20} />
          {t('game.summary.backToLobby')}
        </button>
      </div>
    </div>
  );
}
