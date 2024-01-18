import { Request, Response } from 'express';
import httpStatus from 'http-status';

import productsServices from '../../services/products';

export async function getAllProducts(req: Request, res: Response) {
  try {
    const response = await productsServices.getAllProducts();
    res.status(httpStatus.OK).send(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
}
