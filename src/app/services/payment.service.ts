import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payment} from "../model/student.model";
import {environment} from "../../environments/environment.development";


@Injectable({providedIn: "root"})
export class PaymentService {

  constructor(private httpClient: HttpClient) {
  }

  public getPayments(): Observable<Array<Payment>> {
    return this.httpClient.get<Array<Payment>>(`${environment.apiURL}/payments`);
  }
}

