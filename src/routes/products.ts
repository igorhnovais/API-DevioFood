import { Router } from 'express';

import { getAllProducts } from '../controllers/products/getAllProducts';
import { getOneProduct } from '../controllers/products/getOneproduct';

const router = Router();

router.post('/products/filter', getOneProduct);
router.get('/products', getAllProducts);

export default router;
