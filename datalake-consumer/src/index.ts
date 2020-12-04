import { EachMessagePayload } from 'kafkajs';
import { KafkaIntegration } from './integrations/kafka';
import { GooglePubsubIntegration } from './integrations/google-pubsub';

import ENV from './config/env/env-config';

(async () => {
  const datalakePubsub = new GooglePubsubIntegration(
    ENV.googlePubSubConfig.client,
    ENV.googlePubSubConfig.topicName,
  );

  const kafka = new KafkaIntegration(ENV.kafka.config);
  await kafka.createConsumer(ENV.kafka.consumer);

  await kafka.run({
    eachMessage: async ({ message }: EachMessagePayload): Promise<void> => {
      try {
        const data = String(message.value);
        console.log('DATA RECEIVED');
        console.log(JSON.parse(String(message.value)));

        const messageId = await datalakePubsub.publishMessage(data);
        console.log('PUB/SUB MESSAGE ID', messageId);
      } catch (error) {
        console.error('error to send to pubsub');
        console.log(error.details);
        throw error;
      }
    },
  });
})();
