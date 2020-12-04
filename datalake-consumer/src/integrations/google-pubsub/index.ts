import { ClientConfig, PubSub } from '@google-cloud/pubsub';

export class GooglePubsubIntegration {
  private client: PubSub;

  private topicName: string;

  constructor(clientConfig: ClientConfig, topicName: string) {
    this.client = new PubSub(clientConfig);
    this.topicName = topicName;
  }

  async publishMessage(data: string): Promise<string> {
    const dataBuffer = Buffer.from(data);
    const messageId = await this.client
      .topic(this.topicName)
      .publish(dataBuffer);

    return messageId;
  }
}
