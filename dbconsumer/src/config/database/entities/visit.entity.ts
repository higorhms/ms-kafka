import { Column, Entity } from 'typeorm';

import VisitResult from './visit-result.entity';

@Entity('visits')
export default class Visit {
  @Column()
  clinicianIdentifier: string;

  @Column()
  clinicianFirstName: string;

  @Column()
  clinicianLastName: string;

  @Column()
  createdOnDate: Date;

  @Column()
  isOnline: boolean;

  @Column()
  patientDateOfBirth: Date;

  @Column()
  patientFirstName: string;

  @Column()
  patientLastName: string;

  @Column()
  patientSex: string;

  @Column()
  patientTytoIdentifier: string;

  @Column()
  identifier: string;

  @Column({ nullable: true })
  assistingClinicianIdentifier: string | null;

  @Column({ nullable: true })
  assistingClinicianFirstName: string | null;

  @Column({ nullable: true })
  assistingClinicianLastName: string | null;

  @Column({ nullable: true })
  stationIdentifier: string | null;

  @Column({ nullable: true })
  stationDescription: string | null;

  @Column()
  status: string;

  @Column()
  notes: [];

  @Column()
  externalProperties: [];

  @Column(() => VisitResult)
  results: VisitResult[];

  @Column()
  visitLink: string;

  @Column()
  visitTytoIdentifier: string;

  @Column({ nullable: true })
  visitIdentifier: string | null;

  @Column({ nullable: true })
  accountIdentifier: string | null;
}
