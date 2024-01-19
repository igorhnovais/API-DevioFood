import { Router } from 'express';

import { postProductinOrder } from '../controllers/orders/postProductInOrder';
import { insertOrderValidation } from '../middleware/insertOrderValidation';
import { deleteProductOrder } from '../controllers/orders/deleteproductOrder';
import { updateOrder } from '../controllers/orders/updateOrder';
import { getResumeOrder } from '../controllers/orders/getResumeOrder';

const router = Router();

router.post('/orders', insertOrderValidation, postProductinOrder);
router.get('/orders', getResumeOrder);
router.delete('/orders/:id', deleteProductOrder);
router.put('/orders-update', updateOrder);

export default router;
