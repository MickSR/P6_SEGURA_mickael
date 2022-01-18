const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv").config(); //gestion des variables d'environnement
const helmet = require("helmet"); //aide à sécuriser mes applications Express en définissant divers en-têtes HTTP
const path = require("path"); // gestion des chemins de fichiers
const userRoutes = require("./routes/user");

mongoose.connect(process.env.SECRET_DB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());//express.json()) pour analyser le corps de la requête (bodyparser) en tant qu'objet JSON
app.use("/api/auth", userRoutes);

mongoose.connect(process.env.SECRET_DB, //conection au server mongoDB
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  module.exports = app;