const Joi = require("joi");
exports.newLikeSchema = Joi.object({
    user:Joi.string().hex().length(24).required()
});