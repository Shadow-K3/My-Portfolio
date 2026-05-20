import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import router from './router.js';
import { setLocale, getLocale } from '@/paraglide/runtime.js';

// =========================
// Initialize locale from localStorage BEFORE mounting
// =========================
const savedLocale = localStorage.getItem('user-locale');
if (savedLocale && savedLocale !== getLocale()) {
  setLocale(savedLocale);
}

const app = createApp(App);

app.use(router);

// Wait for router to be ready (avoids animation glitches)
router.isReady().then(() => {
  app.mount('#app');
});

