const jwt = require("jsonwebtoken"); // protection des routes avec l'authentification par token
require("dotenv").config(); // charge les variables d'environnement d'un .envfichier dans process.env

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // récuperation du token dans le header
    const decodedToken = jwt.verify(token, `${process.env.SECRET_TOKEN}`); // comparaison du userId de la demande avec celui extrait du token
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "utilisateur non valide";
    } else {
      next();
    }
  } catch {
    res
      .status(401)
      .json({
        message: "vous n êtes pas autorisé à accéder à cette page",
        data: error,
      });
  }
};
