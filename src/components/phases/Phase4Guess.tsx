import { useState } from 'react';
import { FiSend, FiSkipForward } from 'react-icons/fi';
import type { Room } from '../../types/game';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isGuesser: boolean;
  onSubmit: (guess: string) => void;
}

export default function Phase4Guess({ room, playerId, isGuesser, onSubmit }: Props) {
  const [guess, setGuess] = useState('');
  const round = room.currentRound!;
  const hintsObj = round.hints || {};
  const validHints = Object.values(hintsObj).filter(h => !h.isEliminated);

  const handleSubmit = (value: string) => {
    if (!value.trim()) return;
    onSubmit(value.trim());
  };

  // 回答者以外の画面
  if (!isGuesser) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">Phase 4 — 回答中</span>
        <div className="guesser-waiting-card card">
          <div className="guesser-icon animate-pulse">💭</div>
          <h2 className="phase-title">回答者が考えています…</h2>
          <p className="phase-desc">送ったヒントで正解できるかな？</p>
          <div className="waiting-hints-preview">
            {validHints.map(h => (
              <span key={h.playerId} className="preview-hint badge badge-primary">{h.text}</span>
            ))}
            {validHints.length === 0 && (
              <span className="phase-desc">（有効なヒントがありません）</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 回答者の画面
  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">Phase 4 — あなたの番！</span>
      <h2 className="phase-title">
        ヒントから <span className="text-gradient">お題を当てよう</span>！
      </h2>

      {/* ヒント表示 */}
      {validHints.length > 0 ? (
        <div className="guess-hints-grid">
          {validHints.map((h, i) => (
            <div
              key={h.playerId}
              className={`guess-hint-card card animate-fadeIn delay-${Math.min(i + 1, 5)}`}
            >
              <span className="guess-hint-word text-gradient">{h.text}</span>
              <span className="guess-hint-from">{h.playerName} より</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="card no-hints-card">
          <p className="phase-title">😢</p>
          <p className="phase-desc">有効なヒントがありませんでした…<br />勘で答えるか、パスしましょう！</p>
        </div>
      )}

      {/* 回答入力 */}
      <div className="guess-input-card card">
        <div className="hint-input-group">
          <input
            id="guess-input"
            className="input input-lg"
            type="text"
            placeholder="答えを入力..."
            value={guess}
            maxLength={30}
            onChange={e => setGuess(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit(guess)}
            autoFocus
          />
        </div>
        <div className="guess-actions">
          <button
            id="btn-submit-guess"
            className="btn btn-primary btn-lg"
            onClick={() => handleSubmit(guess)}
            disabled={!guess.trim()}
          >
            <FiSend size={18} />
            回答する
          </button>
          <button
            id="btn-pass-guess"
            className="btn btn-secondary"
            onClick={() => handleSubmit('__PASS__')}
          >
            <FiSkipForward size={18} />
            パス
          </button>
        </div>
      </div>
    </div>
  );
}
