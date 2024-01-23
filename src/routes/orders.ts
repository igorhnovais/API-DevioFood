import { Router } from 'express';

import { postProductinOrder } from '../controllers/orders/postProductInOrder';
import { postFinishedOrder } from '../controllers/orders/postFinishedOrder';
import { insertOrderValidation } from '../middleware/insertOrderValidation';
import { deleteProductOrder } from '../controllers/orders/deleteproductOrder';
import { updateOrder } from '../controllers/orders/updateOrder';
import { getResumeOrder } from '../controllers/orders/getResumeOrder';
import { getFinishedOrder } from '../controllers/orders/getFinishedOrder';

const router = Router();

router.post('/orders', insertOrderValidation, postProductinOrder);
router.post('/orders/finish', postFinishedOrder);
router.get('/orders', getResumeOrder);
router.get('/orders/finish', getFinishedOrder);
router.delete('/orders/:id', deleteProductOrder);
router.put('/orders-update', updateOrder);

export default router;
