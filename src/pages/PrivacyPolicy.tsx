import { FiArrowLeft, FiShield } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="page privacy-page">
      <div className="privacy-container card animate-fadeIn">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <FiArrowLeft /> {t('lobby.back')}
        </button>

        <div className="privacy-header">
          <FiShield size={32} className="text-gradient" />
          <h1 className="privacy-title text-gradient">{t('privacy.title')}</h1>
          <p className="privacy-updated">{t('privacy.lastUpdated')}</p>
        </div>

        <div className="privacy-content">
          <p className="privacy-intro">{t('privacy.introduction')}</p>

          <section className="privacy-section">
            <h2 className="section-title">{t('privacy.sections.0.title')}</h2>
            <p className="section-content">{t('privacy.sections.0.content')}</p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">{t('privacy.sections.1.title')}</h2>
            <p className="section-content">{t('privacy.sections.1.content')}</p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">{t('privacy.sections.2.title')}</h2>
            <p className="section-content">{t('privacy.sections.2.content')}</p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">{t('privacy.sections.3.title')}</h2>
            <p className="section-content">{t('privacy.sections.3.content')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
