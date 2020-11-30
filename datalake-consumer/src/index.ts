import { KafkaIntegration } from './integrations/kafka';
import { GooglePubsubIntegration } from './integrations/google-pubsub';

import { kafkaConfig, googlePubSubConfig } from './config';

(async () => {
  const datalakePubsub = new GooglePubsubIntegration(
    googlePubSubConfig.client,
    googlePubSubConfig.topicName,
  );

  const kafka = new KafkaIntegration(kafkaConfig.client);
  await kafka.createConsumer(kafkaConfig.consumer);

  await kafka.run({
    eachMessage: async (callback: any): Promise<void> => {
      const { topic, partition, message } = callback;
      console.log({
        topic,
        partition,
        message,
      });

      try {
        const data = message.value.toString();
        const messageId = await datalakePubsub.publishMessage(data);
        console.log('messageId', messageId);
      } catch (error) {
        console.error('error to send to pubsub');
        throw error;
      }
    },
  });
})();
