import { FiCheck, FiX, FiSkipForward, FiArrowRight } from 'react-icons/fi';
import type { Room, RoundResult } from '../../types/game';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isHost: boolean;
  totalHints: number;
  onFinalize: (result: RoundResult) => void;
  onNext: () => void;
}

export default function Phase5Result({ room, playerId, onFinalize, onNext }: Props) {
  const round = room.currentRound!;
  const players = room.players || {};
  const hintsObj = round.hints || {};
  
  const guesser = players[round.guesserId];
  const hintsList = Object.values(hintsObj);
  
  // 進行役の判定
  const playerIds = Object.keys(players).sort();
  const activeNonGuessers = playerIds.filter(id => id !== round.guesserId);
  const controllerId = room.hostId !== round.guesserId ? room.hostId : activeNonGuessers[0];
  const isController = playerId === controllerId;

  const isPass = round.guess === '__PASS__';
  const hasResult = !!round.result;
  const usedTopics = room.usedTopics || [];
  const isLastRound = usedTopics.length >= room.totalRounds;

  const resultConfig = {
    correct:   { emoji: '🎉', label: '正解！',   color: '#6cffa0', grad: 'var(--grad-accent)' },
    incorrect: { emoji: '😢', label: '不正解…',  color: '#ff6c8a', grad: 'linear-gradient(135deg,#ff4a6c,#ff6c4a)' },
    pass:      { emoji: '⏭️', label: 'パス',     color: '#ffe06c', grad: 'var(--grad-gold)' },
  };

  const cfg = round.result ? resultConfig[round.result] : null;

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">Phase 5 — 結果発表</span>

      {/* 正解のお題 */}
      <div className="result-topic-row">
        <span className="result-topic-label">お題</span>
        <span className="result-topic-word text-gradient">{round.topic}</span>
      </div>

      {/* 回答者の回答 */}
      <div className="result-guess-box card">
        <span className="result-box-label">{guesser?.name} の回答</span>
        {isPass ? (
          <span className="result-guess-word" style={{ color: '#ffe06c' }}>（パス）</span>
        ) : round.guess ? (
          <span className="result-guess-word">{round.guess}</span>
        ) : (
          <span className="result-guess-word text-muted">回答待ち…</span>
        )}
      </div>

      {/* 使われたヒント */}
      <div className="result-hints-row">
        <span className="result-box-label" style={{ marginBottom: 8 }}>ヒント一覧</span>
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

      {/* 判定ボタン（進行役が正解/不正解/パスを押す）または結果表示 */}
      {!hasResult && isController && round.guess && (
        <div className="result-judge-section">
          <p className="phase-desc">回答は正解でしたか？</p>
          <div className="result-judge-buttons">
            <button
              id="btn-result-correct"
              className="btn btn-accent btn-lg"
              onClick={() => onFinalize('correct')}
            >
              <FiCheck size={22} /> 正解！
            </button>
            {isPass ? (
              <button
                id="btn-result-pass"
                className="btn btn-secondary btn-lg"
                onClick={() => onFinalize('pass')}
              >
                <FiSkipForward size={20} /> パス確定
              </button>
            ) : (
              <button
                id="btn-result-incorrect"
                className="btn btn-danger btn-lg"
                onClick={() => onFinalize('incorrect')}
              >
                <FiX size={22} /> 不正解
              </button>
            )}
          </div>
        </div>
      )}

      {!hasResult && !isController && (
        <p className="phase-desc animate-pulse">進行役が結果を判定しています…</p>
      )}

      {/* 結果表示 */}
      {hasResult && cfg && (
        <div className="result-announce animate-fadeInScale">
          <div className="result-emoji animate-bounce">{cfg.emoji}</div>
          <p className="result-label" style={{ background: cfg.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {cfg.label}
          </p>
          <div className="result-score-row">
            <span className="result-score-label">現在のスコア</span>
            <span className="result-score-value text-gradient-gold">{room.score} / {usedTopics.length}</span>
          </div>

          {isController && (
            <button
              id="btn-next-round"
              className="btn btn-primary btn-lg"
              onClick={onNext}
            >
              <FiArrowRight size={20} />
              {isLastRound ? 'ゲーム終了！' : '次のラウンドへ'}
            </button>
          )}
          {!isController && (
            <p className="phase-desc animate-pulse">進行役が次のラウンドを開始するのを待っています…</p>
          )}
        </div>
      )}
    </div>
  );
}
