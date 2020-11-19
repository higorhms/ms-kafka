import { IKafkaConfig } from '../kafka/kafka-interface';

export interface IEnv {
  port: number;
  kafka: {
    config: IKafkaConfig;
    consumer: {
      group: {
        storeGroupId: string;
      };
      topic: {
        storeTopic: string;
      };
    };
    producer: {
      subscriptionsTopic: string;
    };
  };
  postgres: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    dialect: string;
    logging: boolean;
    timezone: string;
  };
}