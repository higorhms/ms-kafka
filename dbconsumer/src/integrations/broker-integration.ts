import { KafkaConfig } from '../config/kafka';

export class BrokerIntegration {
  private kafka: KafkaConfig;

  constructor() {
    this.kafka = new KafkaConfig();
  }

  async sendMessage(message: any): Promise<void> {
    this.kafka.producer(message);
  }
}
