export interface Student {
  id: number;
  code: string;
  firstName: string;
  lastName: string;
  programId: string;
  photo: string;
}

export interface Payment {
  id: number;
  date: string;
  amount: number;
  paymentType: string;
  paymentStatus: string;
  student: Student;
}

export enum PaymentType {
  CASH , CHECK ,TRANSFERT ,DEPOSIT
}

export enum PaymentStatus {
  CREATED = 0, VALIDATED = 1, REJECTED = 2
}
