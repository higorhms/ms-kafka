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

    producer: {
      subscriptionsTytoVisitsTopic:
        (process.env.KAFKA_PRODUCER_TYTO_VISITS_TOPIC as string) || 'any_topic',
    },
  },
};

export default envs;
