const passwordValidator = require('password-validator');//répond aux exigences pour être validé

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(10)                                    
.is().max(64)                                  
.has().uppercase()                              
.has().lowercase()                             
.has().digits()                                
.has().not().spaces()                    

module.exports = passwordSchema;