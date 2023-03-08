import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import { ComplaintService } from '../../Service/complaint.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  isDisabled:boolean = false;
  passwordform:FormGroup;

  constructor(public dialog: MatDialog,private _formbuilder: FormBuilder,public complaintService:ComplaintService,
    private toastr: ToastrService) {

    this.passwordform =this._formbuilder.group({
      oldpass:['',[Validators.required]],
      password :['',[Validators.required,Validators.maxLength(10)]],
      conpass :['',[Validators.required,Validators.maxLength(10)]],
    })

    // this.passwordform.get("password").valueChanges.subscribe(res=>{
    //   if(res.length != 0){
    //     this.isDisabled = true
    //   }else{
    //     this.isDisabled = false;
    //   }

    // })

  }
  ngOnInit() {
  }
  Submit(passwordform){
    debugger;
 var loginpassword = sessionStorage.getItem('password');
    if(this.passwordform.value.password == "" && this.passwordform.value.conpass =="" && this.passwordform.value.oldpass =="" ){
      this.toastr.error("Please Enter the Mandatory Fields", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else if(this.passwordform.value.oldpass =="" || this.passwordform.value.oldpass ==undefined){
      this.toastr.error("Please Enter the Old Password", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
  }else if(this.passwordform.value.password == "" ||this.passwordform.value.password == undefined || 
  this.passwordform.value.conpass =="" || this.passwordform.value.conpass ==undefined ){
    this.toastr.error("Please Enter the New / Confirm Password", undefined, {
      positionClass: 'toast-bottom-right',
      timeOut: 6000
 });
  }else if(this.passwordform.value.password != this.passwordform.value.conpass){
      this.toastr.error("New and Confirm Password not Match", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else if (this.passwordform.value.oldpass == this.passwordform.value.password){
      this.toastr.error("Old & New password cannot be same", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else if(this.passwordform.value.oldpass != loginpassword){
      this.toastr.error("Old Password does not match", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else{
      if(this.passwordform.valid){
        debugger;
        passwordform.value.userName =sessionStorage.getItem('username'); ;
        let Form = JSON.stringify(this.passwordform.value);
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
        this.complaintService.changepassword(Form).subscribe((res: any)=>{
          console.log(res);
          debugger;
          this.dialog.closeAll();
          if(res.responseBody){
            this.toastr.success(res.responseBody, undefined, {
              positionClass: 'toast-bottom-right',
              timeOut: 6000
         });
          }
        })
      }
    }
  }

  onStrengthChanged(eve){
    debugger;
    if(eve == 100){
     this.isDisabled = false;
    }
  }
}