import app from './app';
import { loadEnv } from './database/config';

loadEnv();
const port: number = +process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`));
