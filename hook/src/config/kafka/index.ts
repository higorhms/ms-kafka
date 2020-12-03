import { Kafka, logLevel, CompressionTypes, Producer } from 'kafkajs';

import ENV from '../env/env-config';
import { IKafkaConfig } from './kafka-interface';

const kafkaConfig: IKafkaConfig = {
  clientId: ENV.kafka.config.clientId,
  brokers: ENV.kafka.config.brokers,
  logLevel: ENV.kafka.config.log ? logLevel.INFO : logLevel.NOTHING,
};

export class KafkaConfig {
  private kafkaProducer: Producer;

  constructor() {
    this.kafkaProducer = new Kafka({
      brokers: ['localhost:9092'],
      clientId: 'tyto',
    }).producer();
  }

  async producer(message: any): Promise<void> {
    const producerConfig = {
      topic: ENV.kafka.producer.subscriptionsTytoVisitsTopic,
      compression: CompressionTypes.GZIP,
      messages: [
        {
          value: JSON.stringify(message),
        },
      ],
    };

    await this.kafkaProducer.send(producerConfig);
  }

  async connectKafka(): Promise<void> {
    await this.kafkaProducer.connect();
  }
}
