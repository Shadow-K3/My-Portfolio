import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import router from './router.js';
import i18n from './i18n'

const app = createApp(App).use(router).use(i18n);
const vm = app.mount('#app');

// Only access localStorage in the browser (prevents build/SSR errors on Vercel)
if (typeof window !== 'undefined' && window.localStorage) {
	const saved = window.localStorage.getItem('locale');
	if (saved) {
		// `locale` is a ref when `legacy: false`
		try {
			i18n.global.locale.value = saved;
		} catch (e) {
			// Fallback: set as plain value if structure differs
			i18n.global.locale = saved;
		}
	}
}

// Debug: log i18n state to help diagnose missing translations in production
if (typeof window !== 'undefined') {
  try {
    // eslint-disable-next-line no-console
    console.info('i18n: locale=', i18n.global?.locale?.value ?? i18n.global?.locale);
    // eslint-disable-next-line no-console
    console.info('i18n: availableLocales=', i18n.global?.availableLocales || Object.keys(i18n.global?.messages || {}));
  } catch (err) {
    // ignore
  }
}

