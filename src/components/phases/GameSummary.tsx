import { FaTrophy, FaHome, FaMedal, FaHistory, FaTwitter } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import type { Room } from '../../types/game';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../pages/Game.css';

interface Props {
  room: Room;
  onFinish: () => void;
}

export default function GameSummary({ room, onFinish }: Props) {
  const { score, totalRounds, history = [], isFreeMode } = room;
  const totalPlayed = history.length;
  const ratio = totalPlayed > 0 ? score / totalPlayed : 0;
  const { t } = useLanguage();

  // スコアに応じた称号とメッセージの定義
  const getAward = () => {
    if (ratio >= 1.0) return { title: t('game.summary.evaluation.perfect'), emoji: '👑', color: 'var(--grad-gold)' };
    if (ratio >= 0.8) return { title: t('game.summary.evaluation.great'), emoji: '🌟', color: 'var(--grad-accent)' };
    if (ratio >= 0.6) return { title: t('game.summary.evaluation.good'), emoji: '✨', color: 'var(--clr-primary-light)' };
    if (ratio >= 0.4) return { title: t('game.summary.evaluation.normal'), emoji: '👍', color: 'var(--clr-text)' };
    return { title: t('game.summary.evaluation.poor'), emoji: '🌱', color: 'var(--clr-text-muted)' };
  };

  const award = getAward();

  const shareOnX = () => {
    const scoreStr = `${score} / ${isFreeMode ? totalPlayed : totalRounds}`;
    const text = t('game.common.shareText', { score: scoreStr });
    const url = window.location.origin;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="phase-container animate-fadeIn" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <span className="phase-tag">{t('game.summary.title')}</span>
      
      <div className="summary-card card animate-fadeInScale">
        <div className="summary-trophy animate-float">
          <FaTrophy size={60} color="#ffe06c" />
        </div>
        
        <h2 className="summary-score-title">{t('game.summary.scoreTitle')}</h2>
        <div className="summary-score-value text-gradient-gold">
          {score} <span className="summary-score-total">/ {isFreeMode ? totalPlayed : totalRounds}</span>
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

        {/* プレイ履歴 */}
        {history.length > 0 && (
          <div className="summary-history-section animate-fadeIn delay-3">
            <h3 className="history-title">
              <FaHistory /> {t('game.summary.historyTitle')}
            </h3>
            <div className="history-list">
              {history.map((r, i) => (
                <div key={i} className="history-item card">
                  <div className="history-item-header">
                    <span className="history-round-num">Round {r.roundNumber}</span>
                    <span className={`history-result-badge ${r.result}`}>
                      {r.result === 'correct' ? '✓' : r.result === 'incorrect' ? '✗' : '—'}
                    </span>
                  </div>
                  <div className="history-topic">
                    <span className="history-label">{t('game.phase5.answerWas')}:</span>
                    <span className="history-word text-gradient">{r.topic}</span>
                  </div>
                  <div className="history-guess">
                    <span className="history-label">{t('game.phase5.guesserWas')}:</span>
                    <span className="history-guess-text">
                      {r.guess === '__PASS__' ? t('game.phase5.pass') : (r.guess || '—')}
                    </span>
                  </div>
                  <div className="history-hints">
                    {Object.values(r.hints || {}).map(h => (
                      <div key={h.playerId} className={`history-hint-chip ${h.isEliminated ? 'eliminated' : ''}`}>
                        <span className="history-hint-name">{h.playerName}</span>
                        <span className="history-hint-text">
                          {h.isEliminated && <FiX size={10} />}
                          {h.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="action-group" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            id="btn-share-x"
            className="btn btn-accent btn-lg btn-full"
            onClick={shareOnX}
          >
            <FaTwitter size={20} />
            {t('game.common.shareX')}
          </button>

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
    </div>
  );
}
