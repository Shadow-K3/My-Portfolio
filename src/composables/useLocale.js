import { ref } from 'vue'
import { setLocale, getLocale } from '@/paraglide/runtime.js'

export const currentLocale = ref(getLocale())

export function switchLocale(newLocale) {
  if (newLocale === currentLocale.value) return; // prevent unnecessary calls
  setLocale(newLocale)
  currentLocale.value = getLocale()
  localStorage.setItem('user-locale', newLocale)
}