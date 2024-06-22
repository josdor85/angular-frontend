import {Component} from '@angular/core';
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  constructor(private studentServicc: StudentService) {}

}
