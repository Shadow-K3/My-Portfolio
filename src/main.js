import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import router from './router.js';
import i18n from './i18n'; // La logique localStorage est déjà ici !

const app = createApp(App);

// 1. On installe les plugins
app.use(i18n);
app.use(router);

// 2. On attend que le router soit prêt (évite les erreurs d'animation)
router.isReady().then(() => {
    // 3. On monte l'app
    // À ce stade, i18n est déjà initialisé avec la bonne langue 
    // grâce à la constante 'savedLocale' dans ton fichier i18n.js
    app.mount('#app');
});