const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
const path = require('path');
const app = express();

const userRoutes = require('./routes/user');


require("dotenv").config();//charge les variables d'environnement d'un .envfichier dans process.env
mongoose.connect(process.env.SECRET_DB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(helmet());//Helmet aide à sécuriser vos applications Express en définissant divers en-têtes HTTP

app.use('/api/auth', userRoutes);

module.exports = app;