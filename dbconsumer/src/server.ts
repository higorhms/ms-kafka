import { ConsumerSubscribeTopic, Kafka, KafkaMessage } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'client_id',
});

const topicToSubscribe = 'any-topic';
const consumer = kafka.consumer({ groupId: 'any-group' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({
    topic: topicToSubscribe,
  } as ConsumerSubscribeTopic);

  await consumer.run({
    eachMessage: async ({
      topic,
      partition,
      message,
    }: {
      topic: string;
      partition: number;
      message: KafkaMessage;
    }) => {
      const payload = JSON.parse(message.value as string);
      console.log(payload);
    },
  });
}

run().catch(console.error);
