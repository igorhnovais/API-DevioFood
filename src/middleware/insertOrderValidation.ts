import { Request, Response, NextFunction } from 'express';

import { newOrder } from '../models/newOrder';
import { order } from '../protocols';
import { unprocessableEntity } from '../errors';

export async function insertOrderValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const infoNewOrder = req.body as order;

  try {
    const { error } = newOrder.validate(infoNewOrder, { abortEarly: false });

    if (error) {
      const erros: string[] = error.details.map(detail => detail.message);
      throw unprocessableEntity(erros[0]);
    }

    res.locals.info = infoNewOrder;
    next();
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
