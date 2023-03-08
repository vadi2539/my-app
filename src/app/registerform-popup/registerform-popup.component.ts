import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform-popup',
  templateUrl: './registerform-popup.component.html',
  styleUrls: ['./registerform-popup.component.css']
})
export class RegisterformPopupComponent implements OnInit {
  loginpopupform:FormGroup;
  

  constructor(public formbulider:FormBuilder,public router:Router) { 

    this.loginpopupform=this.formbulider.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      confirmpassword:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      dateofbirth:[''],
      gender:[Validators.required]
      
    })
  }

  ngOnInit() {
  }

}
