const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
const path = require('path');
const app = express();
const sauceRoutes = require("./routes/sauce");
const userRoutes = require('./routes/user');
require("dotenv").config();//charge les variables d'environnement d'un .envfichier dans process.env

app.use((req, res, next) => { //passer la sécurité CORS , on autorise toutes les origines à accéder à notre API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(process.env.SECRET_DB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use(express.json());//analyse du corps de la requête en tant qu'objets JSON (utilisé pour les requêtes POST)
  app.use(express.urlencoded({extended: true,})//méthode intégrée à express pour reconnaître l'objet de requête entrant sous forme de chaînes ou de tableaux
  );

app.use(helmet());//Helmet aide à sécuriser vos applications Express en définissant divers en-têtes HTTP

// chemin middleware sauces - utilisateurs - images
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;