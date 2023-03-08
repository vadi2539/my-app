import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import { ComplaintService } from '../../Service/complaint.service';

export interface usertype {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-popup',
  templateUrl: './register-popup.component.html',
  styleUrls: ['./register-popup.component.css']
})


export class RegisterPopupComponent implements OnInit {
  usercreateform :FormGroup;
  isDisabled:boolean = false;
  usertypes: usertype[] = [
    {value: 'CUST', viewValue: 'Customer'},
   // {value: 'SALE', viewValue: 'Service Agent'}
  ];

  constructor(public dialog: MatDialog,public complaintService:ComplaintService,private _formbuilder: FormBuilder,public toastr:ToastrService) {
    this.usercreateform=this._formbuilder.group({
      username:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern('^[a-zA-Z0-9]+$')]],
      password:['',[Validators.required,Validators.maxLength(10)]],
      name:    ['',[Validators.required]],
      emailid: ['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileno:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^(0|[0-9][0-9]*)$')]],
      usertype:['',[Validators.required]]
     })

    //  this.usercreateform.get("password").valueChanges.subscribe(res=>{
    //   if(res.length != 0){
    //     this.isDisabled = true
    //   }else{
    //     this.isDisabled = false;
    //   }

    // })
 
   }

  ngOnInit() {
    debugger;
  }

  register(){
    debugger;

    if(!this.usercreateform.invalid){
      this.complaintService.registerUser(this.usercreateform.value).subscribe((res:any)=>{
        debugger;
        this.toastr.success(res.responseBody.validationMsg, undefined, {
          positionClass: 'toast-bottom-right',
          timeOut: 6000
     });  
     this.usercreateform.reset();
     this.dialog.closeAll();
      })
    }else{
      this.toastr.error("Please fill the Mandatory Details", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }
  }


  // onStrengthChanged(eve){
  //   debugger;
  //   if(eve == 100){
  //    this.isDisabled = false;
  //   }
  // }


  usernamechange(){
    debugger;
    var username = this.usercreateform.value.username;
    this.complaintService.validateUser(username).subscribe((res:any)=>{
      debugger;
      if(res.responseBody.validationMsg=="User Already Exists"){
      this.toastr.error(res.responseBody.validationMsg, undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
   this.usercreateform.patchValue({
    username:""
  })
  }
    })
  }

}
