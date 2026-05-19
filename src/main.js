import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router.js'
import { setupI18n } from './i18n'

async function init() {
  const i18n = await setupI18n()

  const app = createApp(App)
  app.use(i18n)
  app.use(router)

  // Wait for router before mounting (avoids animation glitches)
  await router.isReady()
  app.mount('#app')
}

init().catch(err => console.error('Failed to init app:', err))