import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from "../services/student.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {Student} from "../model/student.model";

@Component({
  selector: 'app-load-students',
  templateUrl: './load-students.component.html',
  styleUrl: './load-students.component.css'
})
export class LoadStudentsComponent implements OnInit {
  public student:any;
  public students: any;
  public dataSource: any;
  public payments: any;
  public displayedColumns: string[] = ['firstName', 'lastName', 'code', 'programId']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  protected columnsToDisplay: string[] = ['firstName', 'lastName', 'code', 'programId']
  constructor(public studentService: StudentService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: data => {
        this.students = data;
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(data);
      }, error:err => {
          console.log(err);
      }
    });
  }

  studentPayments(student: Student) {
    this.router.navigateByUrl(`/admin/student-details/${student.code}`)
  }


}
