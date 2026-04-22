import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiPlusCircle, FiLogIn, FiHash } from 'react-icons/fi';
import { useGameStore } from '../store/gameStore';
import './Lobby.css';

export default function Lobby() {
  const navigate = useNavigate();
  const { playerName, savePlayerName, error, setError, handleCreateRoom, handleJoinRoom, isLoading } = useGameStore();
  const [joinCode, setJoinCode] = useState('');
  const [mode, setMode] = useState<'select' | 'create' | 'join'>('select');

  const onCreate = async () => {
    if (!playerName.trim()) { setError('名前を入力してください'); return; }
    const room = await handleCreateRoom();
    if (room) navigate(`/waiting/${room.id}`);
  };

  const onJoin = async () => {
    if (!playerName.trim()) { setError('名前を入力してください'); return; }
    if (!joinCode.trim()) { setError('ルームIDを入力してください'); return; }
    const room = await handleJoinRoom(joinCode);
    if (room) navigate(`/waiting/${room.id}`);
  };

  return (
    <div className="page lobby-page">
      {/* タイトルロゴ */}
      <div className="lobby-logo animate-fadeIn">
        <div className="logo-gem animate-float">💎</div>
        <h1 className="logo-title">
          <span className="text-gradient">HINT-LY</span>
          <span className="logo-one">ONE</span>
        </h1>
        <p className="logo-subtitle">みんなで遊ぶ、ワードヒントゲーム</p>
      </div>

      {/* カード */}
      <div className="lobby-card card animate-fadeIn delay-2">
        {/* 名前入力 */}
        <div className="field-group">
          <label className="field-label">
            <FiUser size={15} />
            あなたの名前
          </label>
          <input
            id="player-name"
            className="input"
            type="text"
            placeholder="ニックネームを入力..."
            value={playerName}
            maxLength={16}
            onChange={(e) => { savePlayerName(e.target.value); setError(null); }}
          />
        </div>

        {error && <p className="error-msg">{error}</p>}

        {/* モード選択 */}
        {mode === 'select' && (
          <div className="action-group animate-fadeInScale">
            <button id="btn-create-room" className="btn btn-primary btn-lg btn-full" onClick={() => setMode('create')}>
              <FiPlusCircle size={20} />
              新しく部屋を作る
            </button>
            <button id="btn-join-room" className="btn btn-secondary btn-lg btn-full" onClick={() => setMode('join')}>
              <FiLogIn size={20} />
              部屋に参加する
            </button>
          </div>
        )}

        {/* 部屋作成 */}
        {mode === 'create' && (
          <div className="action-group animate-fadeInScale">
            <button
              id="btn-confirm-create"
              className="btn btn-primary btn-lg btn-full"
              onClick={onCreate}
              disabled={isLoading}
            >
              <FiPlusCircle size={20} />
              {isLoading ? '作成中...' : '部屋を作成する'}
            </button>
            <button className="btn btn-secondary btn-full" onClick={() => setMode('select')}>
              戻る
            </button>
          </div>
        )}

        {/* 部屋参加 */}
        {mode === 'join' && (
          <div className="action-group animate-fadeInScale">
            <label className="field-label">
              <FiHash size={15} />
              ルームID
            </label>
            <input
              id="join-code-input"
              className="input input-lg"
              type="text"
              placeholder="例: AB3X9Z"
              value={joinCode}
              maxLength={8}
              onChange={(e) => { setJoinCode(e.target.value.toUpperCase()); setError(null); }}
            />
            <button
              id="btn-confirm-join"
              className="btn btn-accent btn-lg btn-full"
              onClick={onJoin}
              disabled={isLoading}
            >
              <FiLogIn size={20} />
              {isLoading ? '参加中...' : '参加する'}
            </button>
            <button className="btn btn-secondary btn-full" onClick={() => setMode('select')}>
              戻る
            </button>
          </div>
        )}
      </div>

      {/* ルール説明 */}
      <div className="lobby-rules animate-fadeIn delay-4">
        <p className="rules-title">🎯 遊び方</p>
        <ol className="rules-list">
          <li>1人が「回答者」になりお題を当てる</li>
          <li>他のプレイヤーは1単語ずつヒントを出す</li>
          <li>同じヒントは消えてしまう！</li>
          <li>残ったヒントだけで正解を導こう</li>
        </ol>
      </div>
    </div>
  );
}
