import { Container } from 'typedi';

import Visit from '../../../config/database/typeorm/schemas/visit.entity';
import VisitRepository from '../../../config/database/typeorm/repositories/visit.repository';
import IVisitRepository from '../../../config/repositories/visit-repository.protocol';
import ICreateVisitDTO from '../dtos/create-visit.dto';

class ReceiveVisitService {
  private visitRepository: IVisitRepository;

  constructor() {
    this.visitRepository = Container.get(VisitRepository);
  }

  async execute(data: ICreateVisitDTO): Promise<void> {
    await this.visitRepository.create(Object.assign(new Visit(), data));
  }
}

export default ReceiveVisitService;
