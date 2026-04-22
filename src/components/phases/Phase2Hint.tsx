import { useState } from 'react';
import { FiSend, FiEdit3 } from 'react-icons/fi';
import type { Room } from '../../types/game';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isGuesser: boolean;
  onSubmit: (hint: string) => void;
}

export default function Phase2Hint({ room, playerId, isGuesser, onSubmit }: Props) {
  const [hint, setHint] = useState('');
  const round = room.currentRound!;
  const hints = round.hints || {};
  const myHint = hints[playerId];
  const submitted = !!myHint;

  const players = room.players || {};
  const nonGuessers = Object.values(players).filter(p => !p.isGuesser);
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
        <span className="phase-tag">Phase 2 — ヒント入力中</span>
        <div className="guesser-waiting-card card">
          <div className="guesser-icon animate-pulse">🤔</div>
          <h2 className="phase-title">考え中…</h2>
          <p className="phase-desc">
            他のプレイヤーがヒントを考えています。<br />
            もう少し待ってください！
          </p>
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
              {submittedCount} / {nonGuessers.length} 人が入力済み
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">Phase 2 — ヒント入力中</span>
        <div className="submitted-card card animate-fadeInScale">
          <div className="submitted-icon">✅</div>
          <h2 className="phase-title">送信完了！</h2>
          <div className="submitted-hint-box">
            <span className="submitted-hint-label">あなたのヒント</span>
            <span className="submitted-hint-word text-gradient">{myHint.text}</span>
          </div>
          <p className="phase-desc">他のプレイヤーを待っています…</p>
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
              {submittedCount} / {nonGuessers.length} 人が入力済み
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">Phase 2 — ヒント入力</span>

      {/* お題の再表示（非回答者のみ） */}
      <div className="mini-topic-card animate-fadeInScale">
        <span className="mini-topic-label">今回のお題</span>
        <span className="mini-topic-word">{round.topic}</span>
      </div>

      <h2 className="phase-title">
        <span className="text-gradient">1単語</span> でヒントを入力しよう
      </h2>
      <p className="phase-desc">
        お題を連想させる単語を1つだけ入力してください。<br />
        同じヒントは消えてしまいます！スペースは使えません。
      </p>

      <div className="hint-input-card card">
        <div className="hint-input-group">
          <FiEdit3 size={20} className="hint-input-icon" />
          <input
            id="hint-input"
            className="input input-lg hint-input"
            type="text"
            placeholder="ヒントを入力..."
            value={hint}
            maxLength={20}
            onChange={e => setHint(e.target.value.replace(/\s/g, ''))}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            autoFocus
          />
        </div>
        {hint.split(/\s+/).length > 1 && (
          <p className="hint-warn">⚠️ 1単語のみ入力できます</p>
        )}
        <button
          id="btn-submit-hint"
          className="btn btn-primary btn-lg btn-full"
          onClick={handleSubmit}
          disabled={!hint.trim() || hint.trim().split(/\s+/).length > 1}
        >
          <FiSend size={18} />
          ヒントを送る
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
          {submittedCount} / {nonGuessers.length} 人が入力済み
        </span>
      </div>
    </div>
  );
}
