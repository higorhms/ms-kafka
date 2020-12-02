import { Kafka, logLevel } from 'kafkajs';

import ENV from '../env/env-config';
import { IKafkaConfig, IKafkaConsumer } from './kafka-interface';

const kafkaConfig: IKafkaConfig = {
  clientId: ENV.kafka.config.clientId,
  brokers: ENV.kafka.config.brokers,
  logLevel: ENV.kafka.config.log ? logLevel.INFO : logLevel.NOTHING,
};

class KafkaConfig {
  private kafka: Kafka;

  constructor() {
    this.kafka = new Kafka({
      brokers: ['localhost:9092'],
      clientId: 'tyto',
    });

    this.consumer({ groupId: 'tyto', topic: 'visit_received' });
  }

  async consumer(params: IKafkaConsumer): Promise<void> {
    const consumer = this.kafka.consumer({ groupId: params.groupId });

    await consumer.connect();
    await consumer.subscribe({ topic: params.topic });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }): Promise<void> => {
        if (topic === ENV.kafka.consumer.topic.storeTopic || 'visit_received') {
          /**
           *  ADD SERVICE TO STORE THE RECEIVED MESSAGE
           */
          console.log(`${topic} + ${JSON.parse(String(message.value))}`);
        }
      },
    });
  }
}

export default KafkaConfig;
