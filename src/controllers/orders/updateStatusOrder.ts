import { Request, Response } from 'express';
import httpStatus from 'http-status';

import orderServices from '../../services/orders';

export async function updateStatusOrder(req: Request, res: Response) {
  const { id } = req.body;
  try {
    console.log('oi', id);
    const response = await orderServices.updateReadyOrder(id);
    res.status(httpStatus.OK).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
