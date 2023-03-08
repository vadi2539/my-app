import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webformregister',
  templateUrl: './webformregister.component.html',
  styleUrls: ['./webformregister.component.css']
})
export class WebformregisterComponent implements OnInit {

  webregisterform:FormGroup;

  constructor(public formbulider: FormBuilder,public router:Router) {

    this.webregisterform=this.formbulider.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gmail:['',Validators.required],
      password:['',Validators.required,Validators.maxLength(14),Validators.minLength(5)],
      confirmPassword:['',[Validators.required,,Validators.maxLength(14),Validators.minLength(5)]],
      moblieNo:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^(0|[0-9][0-9]*)$')]],
      gender:['',[Validators.required]],
      date:['',[Validators.required]]
    })
   }

  ngOnInit() {
  }

  signup(){
    this.router.navigate(["websignup"]);
  }

}
