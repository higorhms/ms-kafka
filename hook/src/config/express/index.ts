/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { Container } from 'typedi';

import globalErrorsMiddleware from '../../api/middlewares/global-errors.middleware';
import { KafkaConfig } from '../kafka';
import routes from '../../api/routes';

class Server {
  public server: Express;

  constructor() {
    this.server = express();

    this.kafka();
    this.middlewares();
    this.routes();
    this.errorHandling();
  }

  private kafka(): void {
    const kafka = Container.get(KafkaConfig);

    kafka.connectKafka();
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
