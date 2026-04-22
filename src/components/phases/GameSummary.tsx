import { FaTrophy, FaHome, FaMedal } from 'react-icons/fa';
import type { Room } from '../../types/game';
import '../../pages/Game.css';

interface Props {
  room: Room;
  onFinish: () => void;
}

export default function GameSummary({ room, onFinish }: Props) {
  const { score, totalRounds } = room;
  const ratio = score / totalRounds;

  // スコアに応じた称号とメッセージの定義
  const getAward = () => {
    if (ratio >= 1.0) return { title: '究極のチームワーク', message: '完璧です！これ以上のチームはありません！', emoji: '👑', color: 'var(--grad-gold)' };
    if (ratio >= 0.8) return { title: '伝説の回答者たち', message: '驚異的な正解率です！素晴らしい！', emoji: '🌟', color: 'var(--grad-accent)' };
    if (ratio >= 0.6) return { title: '一流のチーム', message: '息がぴったり合っていましたね！', emoji: '✨', color: 'var(--clr-primary-light)' };
    if (ratio >= 0.4) return { title: '期待のチーム', message: 'まずまずの結果です。次はもっといけるはず！', emoji: '👍', color: 'var(--clr-text)' };
    return { title: '駆け出しチーム', message: '練習あるのみ！次はもっとヒントを工夫してみましょう。', emoji: '🌱', color: 'var(--clr-text-muted)' };
  };

  const award = getAward();

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">Game Over — 最終結果</span>
      
      <div className="summary-card card animate-fadeInScale">
        <div className="summary-trophy animate-float">
          <FaTrophy size={60} color="#ffe06c" />
        </div>
        
        <h2 className="summary-score-title">最終スコア</h2>
        <div className="summary-score-value text-gradient-gold">
          {score} <span className="summary-score-total">/ {totalRounds}</span>
        </div>

        <div className="award-box animate-fadeIn delay-2">
          <div className="award-emoji">{award.emoji}</div>
          <h3 className="award-title" style={{ color: award.color }}>{award.title}</h3>
          <p className="award-message">{award.message}</p>
        </div>

        <div className="summary-stats">
          <div className="stat-item">
            <FaMedal />
            <span>正解率: {Math.round(ratio * 100)}%</span>
          </div>
        </div>

        <button
          id="btn-return-lobby"
          className="btn btn-primary btn-lg btn-full"
          onClick={onFinish}
        >
          <FaHome size={20} />
          ロビーに戻る
        </button>
      </div>
    </div>
  );
}
