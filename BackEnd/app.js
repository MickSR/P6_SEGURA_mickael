const express = require('express');
const app = express();
const mongoose = require('mongoose');

//bodyparser ( analyse du corps de la requête)
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