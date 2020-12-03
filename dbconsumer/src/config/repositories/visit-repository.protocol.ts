import Visit from '../database/typeorm/schemas/visit.entity';

export default interface IVisitRepository {
  save(visit: Partial<Visit>): Promise<Visit>;
  create(visit: Partial<Visit>): Promise<Visit>;
}
