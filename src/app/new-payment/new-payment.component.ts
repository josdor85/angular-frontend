import {afterRender, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PaymentType} from "../model/student.model";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent implements OnInit{
  showProgress: boolean=false;
  paymentFormGroup! : FormGroup;
  studentCode! : string;
  paymentTypes: string[]=[];
  pdfFileUrl!: string;
  constructor(private fb : FormBuilder,
              private activatedRoute:  ActivatedRoute,
              private studentService: StudentService) {
  }

ngOnInit(): void {
    let element: string;
    for (element in PaymentType) {
      let value = PaymentType[element];
      if (typeof  value === 'string') {
        this.paymentTypes.push(value);
      }
    }
    this.studentCode = this.activatedRoute.snapshot.params['studentCode'];
    this.paymentFormGroup = new FormGroup({
      date : new FormControl(),
      amount: new FormControl(),
      paymentType: new FormControl(),
      studentCode: new FormControl(this.studentCode),
      fileSource: new FormControl(),
      fileName: new FormControl(),
    })
}

  selectFile(event: any) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.paymentFormGroup.patchValue({
        fileSource: file,
        fileName: file.name
      });
      this.pdfFileUrl = window.URL.createObjectURL(file);
    }
  }

  savePayment() {
    this.showProgress = true;
    let date: Date = new Date(this.paymentFormGroup.value.date);
    let formattedDate: string = date.getDate()+"/"+(date.getMonth()+1)+'/'+date.getFullYear();
    let formData: FormData = new FormData();
    formData.set('date', formattedDate);
    formData.set('amount', this.paymentFormGroup.value.amount);
    formData.set('paymentType', this.paymentFormGroup.value.paymentType);
    formData.set('studentCode', this.paymentFormGroup.value.studentCode);
    formData.set('file', this.paymentFormGroup.value.fileSource);
    this.studentService.savePayment(formData).subscribe({
      next: value => {
        alert('Payment Saved successfully!');
        this.showProgress = false;
      },
        error: err => {
          console.log(err);
        }
    });

  }

  protected readonly afterRender = afterRender;

  afterLoadComplete(event: any) {
    console.log(event)
  }

}
