import { Router } from 'express';

import { postProductinOrder } from '../controllers/orders/postProductInOrder';
import { insertOrderValidation } from '../middleware/insertOrderValidation';
import { deleteProductOrder } from '../controllers/orders/deleteproductOrder';

const router = Router();

router.post('/orders', insertOrderValidation, postProductinOrder);
router.delete('/orders/:id', deleteProductOrder);

export default router;
