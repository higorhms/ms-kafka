import { IKafkaConfig } from '../kafka/kafka-interface';

export interface IEnv {
  port: number;
  kafka: {
    config: IKafkaConfig;
    consumer: {
      group: {
        storeTytoVisitsGroupId: string;
      };
      topic: {
        storeTytoVisitsTopic: string;
      };
    };
  };
  mongodb: {
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
