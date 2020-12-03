import { MongoRepository, getMongoRepository } from 'typeorm';

import IVisitRepository from '../../../repositories/visit-repository.protocol';
import Visit from '../schemas/visit.entity';

class VisitRepository implements IVisitRepository {
  private ormRepository: MongoRepository<Visit>;

  constructor() {
    this.ormRepository = getMongoRepository(Visit, 'mongo');
  }

  async create(visit: Partial<Visit>): Promise<Visit> {
    const createdVisit = this.ormRepository.create(visit);

    return this.ormRepository.save(createdVisit);
  }

  async save(visit: Partial<Visit>): Promise<Visit> {
    return this.ormRepository.save(visit);
  }
}

export default VisitRepository;
