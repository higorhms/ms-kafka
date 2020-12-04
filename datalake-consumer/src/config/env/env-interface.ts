import { IKafkaConfig } from '../../integrations/kafka/types';

export interface IEnv {
  port: number;
  kafka: {
    config: IKafkaConfig;
    consumer: {
      groupId: string;
      topic: string;
    };
  };
  googlePubSubConfig: {
    client: {
      projectId: string;
      keyFile: string;
    };
    topicName: string;
  };
}
