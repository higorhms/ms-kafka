import { Kafka, logLevel, CompressionTypes } from 'kafkajs';

import ENV from '../env/env-config';
import { IKafkaConfig, IKafkaConsumer } from './kafka-interface';

const kafkaConfig: IKafkaConfig = {
  clientId: ENV.kafka.config.clientId,
  brokers: ENV.kafka.config.brokers,
  logLevel: ENV.kafka.config.log ? logLevel.INFO : logLevel.NOTHING,
};

const kafka = new Kafka(kafkaConfig);
const producer = kafka.producer();

export class KafkaConfig {
  async producer(message: any): Promise<void> {
    const producerConfig = {
      topic: 'any-message',
      compression: CompressionTypes.GZIP,
      messages: [
        {
          value: JSON.stringify(message),
        },
      ],
    };

    await producer.send(producerConfig);
  }

  async consumer(params: IKafkaConsumer): Promise<void> {
    const consumer = kafka.consumer({ groupId: params.groupId });

    await consumer.connect();
    await consumer.subscribe({ topic: params.topic });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }): Promise<void> => {
        if (topic === ENV.kafka.consumer.topic.storeTopic) {
          /**
           *  ADD SERVICE TO STORE THE RECEIVED MESSAGE
           */
          console.log(`${partition} + ${message}`);
        }
      },
    });
  }

  async connectKafka(): Promise<void> {
    const config = {
      store: {
        groupId: ENV.kafka.consumer.group.storeGroupId,
        topic: ENV.kafka.consumer.topic.storeTopic,
      },
    };

    await producer.connect();

    await this.consumer(config.store);
  }
}
