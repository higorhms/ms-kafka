import { BrokerIntegration } from '../../../integrations';

class TytoService {
  private broker: BrokerIntegration;

  constructor() {
    this.broker = new BrokerIntegration();
  }

  public async execute(data: any): Promise<any> {
    /**
     * STORE DATA AND SEND TO KAFKA
     */

    this.broker.sendMessage(data);
  }
}

export default TytoService;
