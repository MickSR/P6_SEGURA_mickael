const passwordSchema  = require('../models/password');

module.exports = (req, res, next)=> {
    if(!passwordSchema.validate(req.body.password)){
        return res.status(400).json({error: 'le mot de passe doit contenir 1 majuscule, minimum 8 lettres et 1 chiffre'});
    }
    next();
}