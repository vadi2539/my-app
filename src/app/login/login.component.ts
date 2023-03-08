import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComplaintService } from '../Common/Service/complaint.service';
import { MyappService } from '../Common/Service/myapp.service';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  

  constructor(public formbulider:FormBuilder,public router:Router,public toastr:ToastrService
    ,public complaintservice:ComplaintService,public myappservice:MyappService) { 

    this.loginform=this.formbulider.group({
      gmail:['',[Validators.required]],
      password:['',[Validators.required]],

    })
  }

  ngOnInit() {
  }
  register(){
    this.router.navigate(["signup-popup"]);
  }
 
  gmail(){
    var email = this.loginform.value.gmail;
    let obj ={
      email: this.loginform.value.gmail,
      passwrd: this.loginform.value.password
    }
    this.complaintservice.verifyEmail(obj).subscribe((res:any)=>{
      console.log(res);
    })
  }

  password(){
    var password=this.loginform.value.password;
    this.myappservice.verifypassword(password).subscribe((res:any)=>{
      console.log(res);
    })
  }

  moblieno(){
    var moblieno=this.loginform.value.moblieno;
    this.myappservice.verifymoblieno(moblieno).subscribe((res:any)=>{
      console.log(res);
    })
  }

  confirmpassword(){
    let obj={
      password:this.loginform.value.password,
      confirmpassword:this.loginform.value.confirmpassword,
      moblieno:this.loginform.value.moblieno
    }
    
    this.myappservice.verifyconfirmpassword(obj).subscribe((res:any)=>{
      console.log(res);
    })
  }
   
}
