import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import ar from './locales/ar'

const setDirection = (lng: string) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.dir = dir
  document.documentElement.lang = lng
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

setDirection(i18n.language)
i18n.on('languageChanged', setDirection)

export default i18n 
