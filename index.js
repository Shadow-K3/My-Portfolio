const express = require('express');
const path = require('path');
const compression = require('compression'); // Optionnel : pour la performance

const app = express();

// 1. Activer la compression pour charger tes assets plus vite en prod
app.use(compression());

const distPath = path.join(__dirname, 'dist');

// 2. Servir les fichiers statiques avec une mise en cache
app.use(express.static(distPath, {
  maxAge: '1d', // Cache les images/JS pendant 1 jour
  etag: true
}));

// 3. SPA fallback : Ne renvoyer index.html QUE si ce n'est pas un fichier (image/js/css)
app.get('*', (req, res) => {
  // Si la requête demande un fichier qui n'existe pas (ex: .png, .js, .avif)
  // on renvoie une 404 au lieu du HTML de l'app
  if (req.path.includes('.')) {
    res.status(404).send('File not found');
  } else {
    res.sendFile(path.join(distPath, 'index.html'));
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});