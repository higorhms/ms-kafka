import Container from 'typedi';

import './config/database/typeorm/index';

import { BrokerIntegration } from './integrations';
import ReceiveVisitsController from './domains/tyto/controllers/receive-visits.controller';

class Server {
  kafka: BrokerIntegration;

  constructor() {
    this.kafka = Container.get(BrokerIntegration);
  }

  async execute() {
    Container.get(ReceiveVisitsController);
  }
}

export default new Server().execute();
