import { FiArrowLeft, FiMail, FiUser, FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="page contact-page">
      <div className="contact-container card animate-fadeIn">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <FiArrowLeft /> {t('lobby.back')}
        </button>

        <div className="contact-header">
          <FiMail size={32} className="text-gradient" />
          <h1 className="contact-title text-gradient">{t('contact.title')}</h1>
          <p className="contact-intro">{t('contact.description')}</p>
        </div>

        <div className="contact-details">
          <div className="contact-item card">
            <div className="contact-item-icon">
              <FiUser size={24} />
            </div>
            <div className="contact-item-info">
              <h3>{t('contact.nameLabel')}</h3>
              <p>Kariya</p>
            </div>
          </div>

          <div className="contact-item card">
            <div className="contact-item-icon">
              <FiMail size={24} />
            </div>
            <div className="contact-item-info">
              <h3>{t('contact.emailLabel')}</h3>
              <p className="selectable">kariyafannygames@gmail.com</p>
            </div>
          </div>

          <div className="contact-item card">
            <div className="contact-item-icon">
              <FiClock size={24} />
            </div>
            <div className="contact-item-info">
              <h3>{t('contact.respondTime')}</h3>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2026 HINT-LY ONE</p>
        </div>
      </div>
    </div>
  );
}
