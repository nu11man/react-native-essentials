import i18n from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import translationEN from './en/translation.json';
import translationES from './es/translation.json';

export const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});
