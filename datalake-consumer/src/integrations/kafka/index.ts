import { Kafka, Consumer, ConsumerRunConfig } from 'kafkajs';
import { IKafkaConfig, IKafkaConsumer } from './types';

export class KafkaIntegration {
  private config: IKafkaConfig;

  private client: Kafka;

  private consumer: Consumer;

  constructor(config: IKafkaConfig) {
    this.config = config;
    this.client = new Kafka(this.config);
  }

  async createConsumer(params: IKafkaConsumer) {
    const { groupId, topic } = params;
    this.consumer = this.client.consumer({ groupId });

    await this.consumer.connect();
    await this.consumer.subscribe({ topic });
  }

  async run(params: ConsumerRunConfig) {
    await this.consumer.run(params);
  }
}
