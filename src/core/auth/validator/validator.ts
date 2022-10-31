import * as Joi from 'joi';

export const EnvironmentSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development').required(),
  JWT_SECRET: Joi.string().required(),
  PORT: Joi.string().required(),
  URI_DATABASE: Joi.string().required(),
}).options({
  allowUnknown: true,
  abortEarly: false,
});
