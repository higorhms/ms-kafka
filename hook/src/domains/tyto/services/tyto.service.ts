import { BrokerIntegration } from '../../../integrations';
import IVisitModel from '../interfaces/visit.model';

interface IResponse {
  message: string;
}

class TytoService {
  private broker: BrokerIntegration;

  constructor() {
    this.broker = new BrokerIntegration();
  }

  public async execute(data: IVisitModel): Promise<IResponse> {
    await this.broker.connectProducer();

    await this.broker.sendMessage(data);

    return { message: 'success' };
  }
}

export default TytoService;
