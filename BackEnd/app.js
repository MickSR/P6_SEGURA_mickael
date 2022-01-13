const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://elsequiel:QTVA9Nh695eW1Pzk@cluster0.7iwy0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  module.exports = app;