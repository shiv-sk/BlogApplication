const Joi = require("joi");
exports.newBlogSchema = Joi.object({
    title:Joi.string().trim().required(),
    content:Joi.string().trim().required(),
    tag:Joi.string().valid("Tech" , "Education" , "Entertainment" , "Music" , "Politics").default("Tech").trim(),
    status:Joi.string().valid("Published" , "Draft").default("Published").trim(),
    user:Joi.string().hex().length(24).required()
});

exports.editBlogSchema = Joi.object({
    title:Joi.string().trim().optional(),
    content:Joi.string().trim().optional(),
    tag:Joi.string().valid("Tech" , "Education" , "Entertainment" , "Music" , "Politics").default("Tech").trim().optional(),
    status:Joi.string().valid("Published" , "Draft").default("Published").trim().optional(),
    user:Joi.string().hex().length(24).optional()
}).min(1);