import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiPlusCircle, FiLogIn, FiHash, FiGlobe } from 'react-icons/fi';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';
import './Lobby.css';

export default function Lobby() {
  const navigate = useNavigate();
  const { playerName, savePlayerName, error, setError, handleCreateRoom, handleJoinRoom, isLoading } = useGameStore();
  const { language, setLanguage, t } = useLanguage();
  const [joinCode, setJoinCode] = useState('');
  const [mode, setMode] = useState<'select' | 'create' | 'join'>('select');

  const [totalRounds, setTotalRounds] = useState(13);
  const [isFreeMode, setIsFreeMode] = useState(false);

  const onCreate = async () => {
    if (!playerName.trim()) { setError(t('lobby.errors.enterName')); return; }
    const room = await handleCreateRoom(language, totalRounds, isFreeMode);
    if (room) navigate(`/waiting/${room.id}`);
  };

  const onJoin = async () => {
    if (!playerName.trim()) { setError(t('lobby.errors.enterName')); return; }
    if (!joinCode.trim()) { setError(t('lobby.errors.enterRoomId')); return; }
    const room = await handleJoinRoom(joinCode);
    if (room) navigate(`/waiting/${room.id}`);
  };

  const langNames: Record<string, string> = {
    ja: '日本語', en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文',
    ko: '한국어', es: 'Español', hi: 'हिन्दी', ar: 'العربية', fr: 'Français'
  };

  return (
    <div className="page lobby-page">
      {/* 言語切り替え */}
      <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <FiGlobe size={16} style={{ position: 'absolute', left: '10px', pointerEvents: 'none', color: 'var(--text-muted)' }} />
          <select 
            className="btn btn-secondary btn-sm" 
            style={{ paddingLeft: '32px', appearance: 'none', cursor: 'pointer' }}
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="zh-CN">简体中文</option>
            <option value="zh-TW">繁體中文</option>
            <option value="ko">한국어</option>
            <option value="es">Español</option>
            <option value="hi">हिन्दी</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      {/* タイトルロゴ */}
      <div className="lobby-logo animate-fadeIn">
        <div className="logo-gem animate-float">💎</div>
        <h1 className="logo-title notranslate" translate="no">
          <span className="text-gradient">HINT-LY</span>
          <span className="logo-one">ONE</span>
        </h1>
        <p className="logo-subtitle">{t('lobby.subtitle')}</p>
      </div>

      {/* カード */}
      <div className="lobby-card card animate-fadeIn delay-2">
        {/* 名前入力 */}
        <div className="field-group">
          <label className="field-label">
            <FiUser size={15} />
            {t('lobby.yourName')}
          </label>
          <input
            id="player-name"
            className="input"
            type="text"
            placeholder={t('lobby.namePlaceholder')}
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
              {t('lobby.createRoom')}
            </button>
            <button id="btn-join-room" className="btn btn-secondary btn-lg btn-full" onClick={() => setMode('join')}>
              <FiLogIn size={20} />
              {t('lobby.joinRoom')}
            </button>
          </div>
        )}

        {/* 部屋作成 */}
        {mode === 'create' && (
          <div className="action-group animate-fadeInScale">
            <p className="text-muted" style={{ textAlign: 'center', fontSize: '0.9rem', marginBottom: '8px' }}>
              {t('lobby.roomLanguage')}: {langNames[language]}
            </p>
            
            {/* ラウンド数選択 */}
            <div className="field-group">
              <label className="field-label">{t('lobby.roundCount')}</label>
              <div className="round-selector" style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                {[5, 13, 20].map(n => (
                  <button 
                    key={n}
                    className={`btn btn-sm ${totalRounds === n && !isFreeMode ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ flex: 1 }}
                    onClick={() => { setTotalRounds(n); setIsFreeMode(false); }}
                  >
                    {n}
                  </button>
                ))}
                <button 
                  className={`btn btn-sm ${isFreeMode ? 'btn-accent' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setIsFreeMode(!isFreeMode)}
                >
                  ∞ {t('lobby.freeMode')}
                </button>
              </div>
              {isFreeMode && <p className="help-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('lobby.freeModeDesc')}</p>}
            </div>

            <button
              id="btn-confirm-create"
              className="btn btn-primary btn-lg btn-full"
              onClick={onCreate}
              disabled={isLoading}
            >
              <FiPlusCircle size={20} />
              {isLoading ? t('lobby.creating') : t('lobby.createConfirm')}
            </button>
            <button className="btn btn-secondary btn-full" onClick={() => setMode('select')}>
              {t('lobby.back')}
            </button>
          </div>
        )}

        {/* 部屋参加 */}
        {mode === 'join' && (
          <div className="action-group animate-fadeInScale">
            <label className="field-label">
              <FiHash size={15} />
              {t('lobby.roomId')}
            </label>
            <input
              id="join-code-input"
              className="input input-lg"
              type="text"
              placeholder={t('lobby.roomIdPlaceholder')}
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
              {isLoading ? t('lobby.joining') : t('lobby.joinConfirm')}
            </button>
            <button className="btn btn-secondary btn-full" onClick={() => setMode('select')}>
              {t('lobby.back')}
            </button>
          </div>
        )}
      </div>

      {/* ルール説明 */}
      <div className="lobby-rules animate-fadeIn delay-4">
        <p className="rules-title">{t('lobby.howToPlay')}</p>
        <ol className="rules-list">
          <li>{t('lobby.rule1')}</li>
          <li>{t('lobby.rule2')}</li>
          <li>{t('lobby.rule3')}</li>
          <li>{t('lobby.rule4')}</li>
        </ol>
      </div>
    </div>
  );
}
