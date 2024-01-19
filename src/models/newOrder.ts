import joi from 'joi';

export const newOrder = joi.object({
  productId: joi.number().required(),
  nameCustumer: joi.string().required(),
  observation: joi.string().required(),
  transshipment: joi.number().required(),
  total: joi.number().required(),
  drop: joi.boolean().required(),
  description: joi.string().required(),
  aditional: joi.string().required(),
  quantity: joi.number().required(),
});
