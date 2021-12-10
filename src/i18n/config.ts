import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { TRANSLATIONS_EN_US } from './messages/en-US'
import { TRANSLATIONS_RU_RU } from './messages/ru-RU'

const language = 'en'

i18n.use(initReactI18next).init({
  lng: language,
  resources: {
    en: {
      translation: TRANSLATIONS_EN_US,
    },
    ru: {
      translation: TRANSLATIONS_RU_RU,
    },
  },
})

export default i18n
