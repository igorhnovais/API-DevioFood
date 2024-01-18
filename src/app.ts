import cors from 'cors';
import express from 'express';

import healthRoute from './routes/health';
import productsRoute from './routes/products';

const app = express();
app.use(cors());
app.use(express.json());

app.use(healthRoute);
app.use(productsRoute);

export default app;
