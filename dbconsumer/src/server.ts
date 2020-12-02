import Container from 'typedi';

import { BrokerIntegration } from './integrations';

import ReceiveVisitService from './domains/tyto/services/receive-visit.service';

class Server {
  kafka: BrokerIntegration;

  constructor() {
    this.kafka = Container.get(BrokerIntegration);
  }

  async execute() {
    await Container.get(ReceiveVisitService).execute();
  }
}

export default new Server().execute();
