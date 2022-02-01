const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const passwordValid = require("../middleware/password-check"); //validation de la création de mot de passe selon modèle
const emailValid = require("../middleware/email-check"); //validation de la création de l'email
const maxTry = require("../middleware/rate-limit"); //Essai maximum autorisé pour mot de passe

router.post("/signup", emailValid, passwordValid, userCtrl.signup);
router.post("/login", maxTry.limiter, userCtrl.login);

module.exports = router;
