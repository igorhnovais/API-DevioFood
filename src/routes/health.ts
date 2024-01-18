import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).send('server running ok');
});

export default router;
