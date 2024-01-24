import { Request, Response } from 'express';
import httpStatus from 'http-status';

import orderServices from '../../services/orders';

export async function getResumeOrder(req: Request, res: Response) {
  const { nameCustomer } = req.params;
  try {
    const response = await orderServices.resumeOrder(nameCustomer);
    res.status(httpStatus.OK).send([response]);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
