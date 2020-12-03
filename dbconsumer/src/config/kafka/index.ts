import { EachMessagePayload, Kafka, logLevel } from 'kafkajs';

import ENV from '../env/env-config';
import { IKafkaConfig, IKafkaConsumer } from './kafka-interface';

const kafkaConfig: IKafkaConfig = {
  clientId: ENV.kafka.config.clientId,
  brokers: ENV.kafka.config.brokers,
  logLevel: ENV.kafka.config.log ? logLevel.INFO : logLevel.NOTHING,
};

export type KafkaCallback = (message: EachMessagePayload) => void;

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'tyto',
});
class KafkaConfig {
  async consumer(
    params: IKafkaConsumer,
    callback?: KafkaCallback,
  ): Promise<void> {
    const consumer = kafka.consumer({ groupId: params.groupId });

    await consumer.connect();
    await consumer.subscribe({ topic: params.topic });

    await consumer.run({
      eachMessage: async (message: EachMessagePayload): Promise<void> => {
        return callback && callback(message);
      },
    });
  }
}

export default KafkaConfig;
