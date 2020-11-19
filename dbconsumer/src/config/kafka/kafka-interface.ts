import { logLevel } from 'kafkajs';

export interface IKafkaConfig {
  clientId: string;
  brokers: string[];
  retry?: {
    initialRetryTime?: number;
    retries?: number;
  };
  log?: boolean;
  logLevel?: logLevel;
}

export interface IKafkaConsumer {
  groupId: string;
  topic: string;
}
