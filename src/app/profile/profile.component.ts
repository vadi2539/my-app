
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profilecreateform:FormGroup;
  minDate: Date;
  maxDate: Date;


  constructor(public _formbulider:FormBuilder,public toastr:ToastrService,public router: Router) { 
    this.profilecreateform=this._formbulider.group({ 

      name : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]],
      lastname : ['',[Validators.maxLength(10),Validators.minLength(4)]],
      date :['',[Validators.required]],
      gender :['',[Validators.required]],
      address :['',[Validators.required,Validators.maxLength(40),Validators.minLength(10)]],
      address2 :['',[Validators.maxLength(40),Validators.minLength(10)]],
      job:['',[Validators.required]]
      

    })

    const currentYear = new Date().getFullYear();
    this.minDate = new Date("01/01/1980");
    this.maxDate = new Date();


  }

  ngOnInit() {

    

  }

  username(){
    debugger;
    if( this.profilecreateform.value.maxLength=="10" || this.profilecreateform.value.minLength=="4"){
      this.toastr.success("Success ", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else{
      this.toastr.error("Please Enter Valid Name ", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }

  }

  dateChange(type: string, event: MatDatepickerInputEvent<Date>){
    debugger;
    var date = this.profilecreateform.value.date;
    var latest = moment(date).format("DD/MM/YYYY");
    let old = new Date("01/01/1940");
    if(date>=old){
      this.toastr.success("Success ", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
      });
    }else{
      this.toastr.error("Please Enter Valid Date ", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });

    }
  }

  register(){
        
          if(this.profilecreateform.valid){

          }else{
            
          }

   }



}
