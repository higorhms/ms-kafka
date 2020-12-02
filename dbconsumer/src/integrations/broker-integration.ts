import { EachMessagePayload } from 'kafkajs';
import Container from 'typedi';

import { IKafkaConsumer } from '../config/kafka/kafka-interface';
import KafkaConfig from '../config/kafka';

export class BrokerIntegration {
  private kafka: KafkaConfig;

  constructor() {
    this.kafka = Container.get(KafkaConfig);
  }

  async receiveMessage(
    params: IKafkaConsumer,
    callback: (message: EachMessagePayload) => void,
  ): Promise<void> {
    await this.kafka.consumer(params, callback);
  }
}
