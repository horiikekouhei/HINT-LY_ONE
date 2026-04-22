import { FiEyeOff, FiCheckCircle } from 'react-icons/fi';
import type { Room } from '../../types/game';
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

  // 進行役の判定：ホスト、またはホストが回答者の場合は回答者以外の誰か
  const players = room.players || {};
  const playerIds = Object.keys(players).sort();
  const activeNonGuessers = playerIds.filter(id => id !== round.guesserId);
  const controllerId = room.hostId !== round.guesserId ? room.hostId : activeNonGuessers[0];
  const isController = playerId === controllerId;

  if (isGuesser) {
    return (
      <div className="phase-container animate-fadeIn">
        <span className="phase-tag">Phase 1 — お題選択中</span>
        <div className="topic-card animate-fadeInScale">
          <FiEyeOff size={32} color="rgba(255,255,255,0.5)" style={{ marginBottom: 12 }} />
          <p className="topic-hidden">？？？</p>
        </div>
        <h2 className="phase-title">
          あなたは今ラウンドの<br />
          <span className="text-gradient">回答者</span> です！
        </h2>
        <p className="phase-desc">
          他のプレイヤーがお題を選択しています。<br />お題は見えませんので、少々お待ちください。
        </p>
      </div>
    );
  }

  return (
    <div className="phase-container animate-fadeIn">
      <span className="phase-tag">Phase 1 — お題選択</span>
      
      {isController ? (
        <>
          <h2 className="phase-title">
            今回のお題を <span className="text-gradient">選んでください</span>
          </h2>
          <p className="phase-desc">
            回答者に内緒で、ヒントを出しやすいお題を1つ選びましょう。
          </p>

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
          <h2 className="phase-title">
            お題を <span className="text-gradient">選択中</span> です
          </h2>
          <p className="phase-desc animate-pulse">
            進行役が5つの候補から今回のお題を選んでいます。<br />決まるまで少々お待ちください。
          </p>
        </>
      )}
    </div>
  );
}
