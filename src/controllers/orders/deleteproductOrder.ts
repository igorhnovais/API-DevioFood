import { Request, Response } from 'express';
import httpStatus from 'http-status';

import orderServices from '../../services/orders';

export async function deleteProductOrder(req: Request, res: Response) {
  const { id } = req.params;
  const idProduct = Number(id);
  try {
    const response = await orderServices.deleteProductOrder(idProduct);
    res.status(httpStatus.OK).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
