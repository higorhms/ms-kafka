import Container from 'typedi';

import { BrokerIntegration } from '../../../integrations';
import IVisitModel from '../interfaces/visit.model';

interface IResponse {
  message: string;
}

class TytoService {
  private broker: BrokerIntegration;

  constructor() {
    this.broker = Container.get(BrokerIntegration);
  }

  public async execute(data: IVisitModel): Promise<IResponse> {
    await this.broker.sendMessage(data);

    return { message: 'success' };
  }
}

export default TytoService;
