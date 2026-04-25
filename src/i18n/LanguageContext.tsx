import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { ja } from './locales/ja';
import { en } from './locales/en';
import { zhCN } from './locales/zh-CN';
import { zhTW } from './locales/zh-TW';
import { ko } from './locales/ko';
import { es } from './locales/es';
import { hi } from './locales/hi';
import { ar } from './locales/ar';
import { fr } from './locales/fr';
import { de } from './locales/de';

export type Language = 'ja' | 'en' | 'zh-CN' | 'zh-TW' | 'ko' | 'es' | 'hi' | 'ar' | 'fr' | 'de';

const translations: Record<Language, any> = {
  ja, en, 'zh-CN': zhCN, 'zh-TW': zhTW, ko, es, hi, ar, fr, de
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. 保存された言語があるか確認
    const saved = localStorage.getItem('hintlyone_language') as Language;
    if (saved && translations[saved]) return saved;

    // 2. ブラウザの言語設定を確認
    const browserLang = navigator.language.split('-')[0]; // 'ja-JP' -> 'ja'
    const fullBrowserLang = navigator.language; // 'zh-CN' など

    // 中国語の判定
    if (fullBrowserLang.startsWith('zh')) {
      if (fullBrowserLang === 'zh-CN' || fullBrowserLang === 'zh-SG') return 'zh-CN';
      return 'zh-TW';
    }

    // その他の対応言語
    const supportedLangs: Language[] = ['ja', 'en', 'ko', 'es', 'hi', 'ar', 'fr', 'de'];
    const found = supportedLangs.find(l => l === browserLang);
    if (found) return found;

    // 3. デフォルト
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('hintlyone_language', lang);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const dict = translations[language];
    const keys = key.split('.');
    let value = dict;
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    if (typeof value !== 'string') {
      return key; // 翻訳がない場合はキーをそのまま返す
    }
    
    if (params) {
      return Object.entries(params).reduce((str, [k, v]) => {
        return str.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      }, value);
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
