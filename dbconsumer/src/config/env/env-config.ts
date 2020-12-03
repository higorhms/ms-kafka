import * as dotenv from 'dotenv';

import { IEnv } from './env-interface';

dotenv.config();

const envs: IEnv = {
  port: parseInt(process.env.PORT || '3002', 10),
  kafka: {
    config: {
      clientId: (process.env.KAFKA_CLIENT_ID as string) || 'subscription',
      brokers: ((process.env.KAFKA_BROKERS as string) || '').split(','),
      retry: {
        initialRetryTime: parseInt(
          process.env.KAFKA_INITIAL_RETRY_TIME || '300',
          10,
        ),
        retries: parseInt(process.env.KAFKA_RETRIES || '10', 10),
      },
      log: process.env.KAFKA_LOGLEVEL === 'true',
    },
    consumer: {
      group: {
        storeTytoVisitsGroupId:
          (process.env.KAFKA_CONSUMER_STORE_TYTO_VISITS_GROUP_ID as string) ||
          'any_group',
      },
      topic: {
        storeTytoVisitsTopic:
          (process.env.KAFKA_CONSUMER_STORE_TYTO_VISITS_TOPIC as string) ||
          'any_topic',
      },
    },
  },
  mongodb: {
    database: process.env.MONGODB_DB_DATABASE as string,
    host: process.env.MONGODB_DB_HOST as string,
    port: parseInt(process.env.MONGODB_DB_PORT as string, 10) || 27017,
    username: process.env.MONGODB_DB_USER as string,
    password: process.env.MONGODB_DB_PASSWORD as string,
    dialect: process.env.MONGODB_DB_DIALECT as string,
    logging: process.env.MONGODB_DB_LOGGING === 'true',
    timezone: (process.env.MONGODB_DB_TIMEZONE as string) || 'UTC',
  },
};

export default envs;
