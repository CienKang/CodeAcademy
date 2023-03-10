const Joi = require('joi');

const newUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).max(30).required()
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).max(30).required()
});

module.exports = { newUserSchema, loginSchema };