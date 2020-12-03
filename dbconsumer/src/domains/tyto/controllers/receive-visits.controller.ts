import Container from 'typedi';
import ENV from '../../../config/env/env-config';

import { BrokerIntegration } from '../../../integrations';
import ReceiveVisitService from '../services/receive-visit.service';

class ReceiveVisitsController {
  private broker: BrokerIntegration;

  constructor() {
    this.broker = Container.get(BrokerIntegration);

    this.handleReceiveVisits();
  }

  async handleReceiveVisits(): Promise<void> {
    await this.broker.receiveMessage(
      {
        groupId: ENV.kafka.consumer.group.storeTytoVisitsGroupId,
        topic: ENV.kafka.consumer.topic.storeTytoVisitsTopic,
      },
      ({ message, topic }) => {
        if (topic === ENV.kafka.consumer.topic.storeTytoVisitsTopic) {
          const service = Container.get(ReceiveVisitService);

          service.execute(JSON.parse(String(message.value)));
        }
      },
    );
  }
}

export default ReceiveVisitsController;
