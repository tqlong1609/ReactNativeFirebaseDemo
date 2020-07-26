import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import vi from './vi.json';
// the translations
// (tip: move them in separate JSON files and import them)
const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};
i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
