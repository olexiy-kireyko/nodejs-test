import createHttpError from 'http-errors';
import { SWAGGER_PATH } from '../constants/index.js';
import fs from 'node:fs';
import swaggerUI from 'swagger-ui-express';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    return (req, res, next) =>
      next(createHttpError(500, 'cant load swagger docs'));
  }
};
