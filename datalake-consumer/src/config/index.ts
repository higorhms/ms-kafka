import * as dotenv from 'dotenv';

dotenv.config();

export const kafkaConfig = {
  client: {
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
    groupId: process.env.KAFKA_CONSUMER_STORE_GROUP_ID as string,
    topic: process.env.KAFKA_CONSUMER_STORE_TOPIC as string,
  },
};

export const googlePubSubConfig = {
  client: {
    projectId: process.env.GOOGLE_PUB_SUB_PROJECT_ID,
    keyFile: process.env.GOOGLE_PUB_SUB_KEY_FILE,
  },
  topicName: process.env.GOOGLE_PUB_SUB_TOPIC_NAME as string,
};
