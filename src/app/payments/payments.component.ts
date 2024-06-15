import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {

  public payments: any;
  public dataSource : any;
  public displayedColumns: string[] = ['id', 'date', 'amount', 'paymentType', 'paymentStatus', 'firstName']

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8009/payments').subscribe({
      next : data => {
        this.payments = data;
        this.dataSource = new MatTableDataSource(this.payments);
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
