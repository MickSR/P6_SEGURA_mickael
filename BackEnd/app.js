const express = require('express');
const app = express();
const mongoose = require('mongoose');

//express.json()) pour analyser le corps de la requête (bodyparser) en teant qu'objet JSON
//extended : true pour analyser des objets imbriqués (chaînes ou tableaux)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//test du cours
app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue !' }); 
});

mongoose.connect('mongodb+srv://elsequiel:malabarbak@cluster0.7iwy0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  module.exports = app;