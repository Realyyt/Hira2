// Simple i18n implementation without external dependencies for now
// This avoids React hook conflicts

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import hi from './locales/hi.json';
import tr from './locales/tr.json';
import bn from './locales/bn.json';
// Add more imports as you add more languages

const translations: Record<string, any> = {
  en,
  es,
  fr,
  de,
  ar,
  pt,
  ru,
  zh,
  ja,
  ko,
  hi,
  tr,
  bn,
  // Add more as needed
};

let currentLanguage = 'en';

export const getCurrentLanguage = () => currentLanguage;

export const setLanguage = (lang: string) => {
  currentLanguage = lang;
  localStorage.setItem('hira-language', lang);
  // Update document direction for RTL languages
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
  // Trigger a re-render by dispatching a custom event
  window.dispatchEvent(new CustomEvent('language-change'));
};

export const getTranslation = (key: string, lang: string = currentLanguage): string => {
  const keys = key.split('.');
  let value: any = translations[lang] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

// Initialize from localStorage
const savedLanguage = localStorage.getItem('hira-language');
if (savedLanguage && translations[savedLanguage]) {
  currentLanguage = savedLanguage;
}