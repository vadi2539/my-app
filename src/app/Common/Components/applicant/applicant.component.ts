import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  applicantForm:FormGroup;

  constructor(public formbulider:FormBuilder) {
    
     this.applicantForm=this.formbulider.group({
      applicantNumber:['',[Validators.required]],
      applicantName:['',[Validators.required]],
      vertical:['',[Validators.required]],
      applicantType:['',[Validators.required]],
      status:['',[Validators.required]],
      createdDate:['',[Validators.required]],
      submittedDate:['',[Validators.required]],
     })
    
   }

  ngOnInit() {
  }

}
