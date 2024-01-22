import { Request, Response } from 'express';
import httpStatus from 'http-status';

import orderServices from '../../services/orders';

export async function postFinishedOrder(req: Request, res: Response) {
  const { name } = req.body;
  try {
    const response = await orderServices.postFinishedOrder(name);
    res.status(httpStatus.CREATED).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
