import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'button.view': 'view',
      'tabs.championships': 'Championships',
      'tabs.events': 'Calendar',
      'tabs.about': 'About',
      'header.fights': 'Fights',
      'header.fight': 'Fight',
      'header.video': 'Video',
    }
  },
  fr: {
    translation: {
      'button.view': 'voir',
      'tabs.championships': 'Championnats',
      'tabs.events': 'Calendrier',
      'tabs.about': 'A propos',
      'header.fights': 'Combats',
      'header.fight': 'Combat',
      'header.video': 'Vidéo',
    }
  }
}

i18n
  //.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    keySeparator: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;