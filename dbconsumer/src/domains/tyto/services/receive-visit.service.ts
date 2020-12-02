import { Container } from 'typedi';

import { BrokerIntegration } from '../../../integrations';

class ReceiveVisitService {
  private broker: BrokerIntegration;

  constructor() {
    this.broker = Container.get(BrokerIntegration);
  }

  async execute(): Promise<void> {
    await this.broker.receiveMessage(
      { groupId: 'tyto', topic: 'visit_received' },
      ({ message, topic }) => {
        console.log(`${topic} + ${message}`);
      },
    );
  }
}

export default ReceiveVisitService;
