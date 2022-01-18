const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
const path = require('path');
const app = express();

const userRoutes = require('./routes/user');


require("dotenv").config();
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

// Express app secure toolset
app.use(helmet());

app.use('/api/auth', userRoutes);

module.exports = app;