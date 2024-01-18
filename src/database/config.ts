import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

function loadEnv(): void {
  let path: string;

  if (process.env.NODE_ENV === 'test') {
    path = '.env.test';
  } else if (process.env.NODE_ENV === 'development') {
    path = '.env.development';
  } else {
    path = '.env';
  }

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}

export { loadEnv };
