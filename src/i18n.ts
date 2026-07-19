import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json';
import commonHi from './locales/hi/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: commonEn
      },
      hi: {
        translation: commonHi
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Dynamically set HTML lang attribute when language changes,
// which triggers CSS font-family switches
document.documentElement.setAttribute('lang', i18n.language || 'en');
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
