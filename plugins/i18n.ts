import { createI18n } from 'vue-i18n'

import ru from './messages/ru'
import en from './messages/en'
import uz from './messages/uz'

const setDateTimeFormats = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  },
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
  }
}

const dateTimeFormats = {
  en: setDateTimeFormats,
  es: setDateTimeFormats,
  de: setDateTimeFormats,
  'en-GB': setDateTimeFormats
}

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru', // localStorage.getItem('locale')
    dateTimeFormats,
    messages: {
      ru,
      en,
      uz
    }
  })

  vueApp.use(i18n)
})
