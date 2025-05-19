const Joi = require("joi");
exports.newCommentSchema = Joi.object({
    user:Joi.string().hex().length(24).required(),
    comment:Joi.string().min(3).max(200).required()
});