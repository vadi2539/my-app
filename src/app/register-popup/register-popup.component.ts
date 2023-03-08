import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-popup',
  templateUrl: './register-popup.component.html',
  styleUrls: ['./register-popup.component.css']
})
export class RegisterPopupComponent implements OnInit {

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
