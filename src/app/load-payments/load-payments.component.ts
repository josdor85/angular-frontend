import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-load-payments',
  templateUrl: './load-payments.component.html',
  styleUrl: './load-payments.component.css'
})
export class LoadPaymentsComponent implements OnInit {
  public httpClient = inject(HttpClient);
  public payments: any;
  public dataSource : any;
  public displayedColumns: string[] = ['id', 'date', 'amount', 'paymentType', 'paymentStatus', 'firstName']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit() {
    this.httpClient.get('http://localhost:8009/payments').subscribe({
      next : (data: any)=> {
        this.payments = data;
        this.dataSource = new MatTableDataSource(this.payments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      error : err => {
        console.log(err);
      }
    })
  }
}

