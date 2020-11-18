/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from '../../api/routes';

class Server {
  public server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new Server().server;
