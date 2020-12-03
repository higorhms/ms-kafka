import { IKafkaConfig } from '../kafka/kafka-interface';

export interface IEnv {
  port: number;
  kafka: {
    config: IKafkaConfig;
    producer: {
      subscriptionsTytoVisitsTopic: string;
    };
  };
}
