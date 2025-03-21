import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();
  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );
  app.use(cors());
  app.use(cookieParser());

  // app.use((req, res, next) => {
  //   console.log(`Time: ${new Date().toLocaleString()}`);
  //   next();
  // });

  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.get('/', (req, res) => {
    res.json({ message: 'Hello moto!' });
  });

  app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
