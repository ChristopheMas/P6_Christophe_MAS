const passwordSchema = require("../models/Password");

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.status(400).json({
      error:
        "Le mot de passe doit contenir au moins une majuscule et un chiffre !" +
        passwordSchema.validate(req.body.password, { list: true }),
    });
  } else {
    next();
  }
};
