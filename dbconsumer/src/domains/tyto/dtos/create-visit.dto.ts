interface IVisitResultDTO {
  checkupType: string;

  checkupTypeCode: string;

  dateTaken: Date;

  isOnline: boolean;

  measurementUnit: string;

  performedBy: string;

  preparationEndDate: Date;

  preparationStartDate: Date;

  value: string;
}

export default interface ICreateVisitDTO {
  clinicianIdentifier: string;

  clinicianFirstName: string;

  clinicianLastName: string;

  createdOnDate: Date;

  isOnline: boolean;

  patientDateOfBirth: Date;

  patientFirstName: string;

  patientLastName: string;

  patientSex: string;

  patientTytoIdentifier: string;

  identifier: string;

  assistingClinicianIdentifier: string | null;

  assistingClinicianFirstName: string | null;

  assistingClinicianLastName: string | null;

  stationIdentifier: string | null;

  stationDescription: string | null;

  status: string;

  notes: [];

  externalProperties: [];

  results: IVisitResultDTO[];

  visitLink: string;

  visitTytoIdentifier: string;

  visitIdentifier: string | null;

  accountIdentifier: string | null;
}
