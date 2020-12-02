/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';

import globalErrorsMiddleware from '../../api/middlewares/global-errors.middleware';
import routes from '../../api/routes';

class Server {
  public server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.errorHandling();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private errorHandling(): void {
    this.server.use(globalErrorsMiddleware);
  }
}

export default new Server().server;
