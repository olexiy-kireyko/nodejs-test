import Joi from 'joi';

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'name should be a atring',
    'string.min': 'name have at least {#limit} characters',
    'string.max': 'name should have at most {#limit} characters',
    'any.required': 'name is required',
  }),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
});
