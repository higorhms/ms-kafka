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
}
