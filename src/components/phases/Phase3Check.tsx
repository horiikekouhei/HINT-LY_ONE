import { FiCheck, FiX } from 'react-icons/fi';
import type { Room } from '../../types/game';
import '../../pages/Game.css';

interface Props {
  room: Room;
  playerId: string;
  isGuesser: boolean;
  isHost: boolean;
  onToggleEliminate: (targetPlayerId: string) => void;
  onConfirm: () => void;
}

export default function Phase3Check({ room, playerId, isGuesser, onToggleEliminate, onConfirm }: Props) {
  const round = room.currentRound!;
  const hintsObj = round.hints || {};
  const hints = Object.values(hintsObj);
  const validCount = hints.filter(h => !h.isEliminated).length;

  if (isGuesser) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">Phase 3 — 重複チェック中</span>
        <div className="guesser-waiting-card card">
          <div className="guesser-icon animate-pulse">🔍</div>
          <h2 className="phase-title">チェック中…</h2>
          <p className="phase-desc">
            他のプレイヤーが重複するヒントを<br />取り除いています。もう少し！
          </p>
        </div>
      </div>
    );
  }

  // 進行役の判定
  const players = room.players || {};
  const playerIds = Object.keys(players).sort();
  const activeNonGuessers = playerIds.filter(id => id !== round.guesserId);
  const controllerId = room.hostId !== round.guesserId ? room.hostId : activeNonGuessers[0];
  const isController = playerId === controllerId;

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">Phase 3 — 重複チェック</span>
      <h2 className="phase-title">
        重複している<span className="text-gradient"> ヒントを消そう</span>
      </h2>
      <p className="phase-desc">
        同じ・似た意味のヒントをタップして消してください。<br />
        残ったヒントが回答者に見えます。
      </p>

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
              <span>消去済み</span>
            </div>
          </button>
        ))}
      </div>

      <div className="check-summary">
        <span className="check-valid-count">
          残り <strong className="text-gradient-accent">{validCount}</strong> 個のヒントが回答者に届きます
        </span>
      </div>

      {isController ? (
        <button
          id="btn-confirm-elimination"
          className="btn btn-primary btn-lg"
          onClick={onConfirm}
        >
          <FiCheck size={20} />
          これで確定する
        </button>
      ) : (
        <p className="phase-desc animate-pulse">進行役が確定するのを待っています…</p>
      )}
    </div>
  );
}
