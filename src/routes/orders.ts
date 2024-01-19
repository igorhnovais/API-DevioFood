import { Router } from 'express';

import { postProductinOrder } from '../controllers/orders/postProductInOrder';
import { insertOrderValidation } from '../middleware/insertOrderValidation';

const router = Router();

router.post('/orders', insertOrderValidation, postProductinOrder);

export default router;
