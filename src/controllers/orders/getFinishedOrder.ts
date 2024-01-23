import { Request, Response } from 'express';
import httpStatus from 'http-status';

import orderServices from '../../services/orders';

export async function getFinishedOrder(req: Request, res: Response) {
  try {
    const response = await orderServices.getPreparingOrders();
    res.status(httpStatus.OK).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
