const passwordValidator = require('password-validator');//répond aux exigences pour être validé

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                    
.is().max(64)                                  
.has().uppercase(1)                              
.has().lowercase()                             
.has().digits(1)                                
.has().not().spaces()                    

module.exports = passwordSchema;