import { Request, Response } from 'express';
import httpStatus from 'http-status';

import productsServices from '../../services/products';

export async function getOneProduct(req: Request, res: Response) {
  const { filter } = req.body;
  try {
    const response = await productsServices.getOneProduct(filter);
    res.status(httpStatus.OK).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
