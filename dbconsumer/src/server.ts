import KafkaConfig from './config/kafka';

class Server {
  kafka: KafkaConfig;

  constructor() {
    this.kafka = new KafkaConfig();
  }
}

export default new Server();
