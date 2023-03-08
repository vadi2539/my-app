import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policycreateform:FormGroup;
  minDate: Date;
  maxDate: Date;
 


  constructor(public formbulider:FormBuilder) { 

    this.policycreateform=this.formbulider.group({
      customername:['',[Validators.required,Validators.maxLength(100)]],
      gmail :['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      moblieno:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^(0|[0-9][0-9]*)$')]],
      address:['',[Validators.required]],
      job:['',[Validators.required]],
      policydate:['',[Validators.required]]
      

    })
    const currentYear = new Date().getFullYear();
    this.minDate = new Date("01/01/1940");
    this.maxDate = new Date();

    
  }

  ngOnInit() {
  }

}
