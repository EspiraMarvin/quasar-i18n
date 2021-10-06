import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from 'i18n-locales'
import { messages, numberFormats } from 'src/i18n'

console.log('stringfy locale', JSON.stringify(locales, 'sw-KE', 2))

Vue.use(VueI18n)
console.log(messages, numberFormats)

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
