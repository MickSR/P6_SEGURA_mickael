const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv").config(); //gestion des variables d'environnement

//express.json()) pour analyser le corps de la requête (bodyparser) en tant qu'objet JSON
//extended : true pour analyser des objets imbriqués (chaînes ou tableaux)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//test du cours
app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue !' }); 
});

mongoose.connect(process.env.SECRET_DB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  module.exports = app;