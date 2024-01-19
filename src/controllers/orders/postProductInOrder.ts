import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { order } from '../../protocols';
import orderServices from '../../services/orders';

export async function postProductinOrder(req: Request, res: Response) {
  const infosNewOrder = res.locals.info as order;
  try {
    const response = await orderServices.postProductinOrder(infosNewOrder);
    res.status(httpStatus.CREATED).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
