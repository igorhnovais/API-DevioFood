import cors from 'cors';
import express from 'express';

import healthRoute from './routes/health';

const app = express();
app.use(cors());
app.use(express.json());

app.use(healthRoute);

export default app;
