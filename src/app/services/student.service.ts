import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payment, Student} from "../model/student.model";
import {environment} from "../../environments/environment.development";


@Injectable({providedIn: "root"})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  public getStudents(): Observable<Array<Student>> {
    return this.httpClient.get<Array<Student>>(`${environment.apiURL}/students`);
  }

  public getStudentPayments(code: string): Observable<Array<Payment>> {
    return this.httpClient.get<Array<Payment>>(`${environment.apiURL}/students/${code}/payments`);
  }

  public savePayment(formData: FormData): Observable<Payment> {
    return this.httpClient.post<Payment>(`${environment.apiURL}/payments/base`, formData);
  }
}

