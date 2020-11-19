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
        storeGroupId: process.env.KAFKA_CONSUMER_STORE_GROUP_ID as string,
      },
      topic: {
        storeTopic: process.env.KAFKA_CONSUMER_STORE_TOPIC as string,
      },
    },
    producer: {
      subscriptionsTopic: process.env
        .KAFKA_PRODUCER_SUBSCRIPTIONS_TOPIC as string,
    },
  },
  postgres: {
    database: process.env.POSTGRES_DB as string,
    host: process.env.POSTGRES_DB_HOST as string,
    port: parseInt(process.env.POSTGRES_DB_PORT as string, 10) || 5432,
    username: process.env.POSTGRES_DB_USER as string,
    password: process.env.POSTGRES_DB_PASSWORD as string,
    dialect: process.env.POSTGRES_DB_DIALECT as string,
    logging: process.env.POSTGRES_DB_LOGGING === 'true',
    timezone: (process.env.POSTGRES_DB_TIMEZONE as string) || 'UTC',
  },
};

export default envs;
