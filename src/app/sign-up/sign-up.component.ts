import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm:FormGroup;
  passType="password";
  captcha:any;

  constructor(public dialog: MatDialog,public _formbulider:FormBuilder
    ,public router:Router,public toastr:ToastrService) {

      this.signupForm= this._formbulider.group({
        gmail : ['',[Validators.required,Validators.email]],
        password :['',[Validators.required]],
        captcha :[``]

      })


     }

  ngOnInit() {
    debugger;
    var chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
    var strings_length=6;
    var ChangeCaptcha='';
    for(var i=0; i<strings_length;i++ ) {
      var rnum = Math.floor(Math.random() * chars.length);
      this.captcha += chars.substring(rnum,rnum+1);

    }
    var lastSix = this.captcha.substr(this.captcha.length - 6);
    this.captcha=lastSix;
    localStorage.setItem("captcha",this.captcha);
    console.log(this.captcha);
  }
  reCaptcha(){
    debugger;
    var chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
    var strings_length=6;
    var ChangeCaptcha='';
    for(var i=0; i<strings_length;i++ ) {
      var rnum = Math.floor(Math.random() * chars.length);
      this.captcha += chars.substring(rnum,rnum+1);

    }
    var lastSix = this.captcha.substr(this.captcha.length - 6);
    this.captcha=lastSix;
    localStorage.setItem("captcha",this.captcha);
    console.log(this.captcha);

  }
  showPwd(){
    debugger;
    if (this.passType == "password"){
      this.passType = "text";
    }else{
      this.passType = "password";
    }
  }

}
