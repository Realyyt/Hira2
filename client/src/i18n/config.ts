// Simple i18n implementation without external dependencies for now
// This avoids React hook conflicts

interface Translations {
  [key: string]: any;
}

const translations: Record<string, Translations> = {
  en: {
    navigation: {
      features: "Features",
      download: "Download",
      social: "Social",
      security: "Security",
      business: "Business"
    },
    hero: {
      title: "Connect. Share.",
      titleHighlight: "Stay Secure.",
      subtitle: "Hira combines social media with secure messaging. Share public posts, join communities, and chat privately with end-to-end encryption.",
      getApp: "Get Hira",
      joinCommunity: "Join Community",
      secureChat: "Secure Chat",
      socialFeed: "Social Feed",
      liveStreaming: "Live Streaming"
    }
  },
  es: {
    navigation: {
      features: "Características",
      download: "Descargar", 
      social: "Social",
      security: "Seguridad",
      business: "Negocios"
    },
    hero: {
      title: "Conecta. Comparte.",
      titleHighlight: "Mantente Seguro.",
      subtitle: "Hira combina redes sociales con mensajería segura. Comparte publicaciones públicas, únete a comunidades y chatea de forma privada con cifrado de extremo a extremo.",
      getApp: "Obtener Hira",
      joinCommunity: "Unirse a la Comunidad",
      secureChat: "Chat Seguro",
      socialFeed: "Feed Social",
      liveStreaming: "Transmisión en Vivo"
    }
  }
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