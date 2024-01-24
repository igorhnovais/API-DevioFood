import { Router } from 'express';

import { postProductinOrder } from '../controllers/orders/postProductInOrder';
import { postFinishedOrder } from '../controllers/orders/postFinishedOrder';
import { insertOrderValidation } from '../middleware/insertOrderValidation';
import { deleteProductOrder } from '../controllers/orders/deleteproductOrder';
import { updateOrder } from '../controllers/orders/updateOrder';
import { updateStatusOrder } from '../controllers/orders/updateStatusOrder';
import { getResumeOrder } from '../controllers/orders/getResumeOrder';
import { getFinishedOrder } from '../controllers/orders/getFinishedOrder';
import { getOrderReady } from '../controllers/orders/getOrderReady';

const router = Router();

router.post('/orders', insertOrderValidation, postProductinOrder);
router.post('/orders/finish/:name', postFinishedOrder);
router.get('/orders/:nameCustomer', getResumeOrder);
router.get('/orders-finish', getFinishedOrder);
router.get('/orders-ready', getOrderReady);
router.delete('/orders/:id', deleteProductOrder);
router.put('/orders-update', updateOrder);
router.put('/orders-update-ready', updateStatusOrder);

export default router;
