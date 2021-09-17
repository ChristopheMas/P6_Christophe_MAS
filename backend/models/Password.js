const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema.has().digits().has().uppercase();

module.exports = passwordSchema;
