import Container from 'typedi';

import { KafkaConfig } from '../config/kafka';

export class BrokerIntegration {
  private kafka: KafkaConfig;

  constructor() {
    this.kafka = Container.get(KafkaConfig);
  }

  async sendMessage(message: any): Promise<void> {
    this.kafka.producer(message);
  }
}
