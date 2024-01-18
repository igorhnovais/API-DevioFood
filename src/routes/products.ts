import { Router } from 'express';

import { getAllProducts } from '../controllers/products/getAllProducts';

const router = Router();

router.get('/products', getAllProducts);

export default router;
