import { createI18n } from 'vue-i18n'

// This function dynamically loads the locale JSON files
async function loadLocaleMessages(locale) {
  // The `?url` suffix ensures Vite gives us the final deployed path
  const modules = import.meta.glob('./locales/*.json', { eager: false })
  const loader = modules[`./locales/${locale}.json`]
  if (!loader) {
    console.warn(`Locale ${locale} not found, falling back to en`)
    const fallback = modules['./locales/en.json']
    const res = await fallback()
    return res.default
  }
  const res = await loader()
  return res.default
}

let i18nInstance = null

export async function setupI18n() {
  // Get saved locale (client‑side only)
  let savedLocale = 'fr' // default
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('user-locale')
    if (stored) savedLocale = stored
  }

  // Load the messages for the saved locale
  const messages = {}
  messages[savedLocale] = await loadLocaleMessages(savedLocale)

  i18nInstance = createI18n({
    legacy: false,
    globalInjection: true,
    locale: savedLocale,
    fallbackLocale: 'en',
    messages,
  })
  return i18nInstance
}

export function getI18n() {
  return i18nInstance
}