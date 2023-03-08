import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyappService } from '../Common/Service/myapp.service';

@Component({
  selector: 'app-webregister',
  templateUrl: './webregister.component.html',
  styleUrls: ['./webregister.component.css']
})
export class WebregisterComponent implements OnInit {

  webregisterform:FormGroup;

  constructor(public formbulider:FormBuilder,public toastrService:ToastrService,public router:Router,public myappservice:MyappService) {

       this.webregisterform=this.formbulider.group({

      firstname:['',[Validators.required]],
      lastname :['',[Validators.required]],
      gmail    :['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password :['',[Validators.required,,Validators.minLength(4),Validators.maxLength(12)]],
      confirmpassword:['',[Validators.required,,Validators.minLength(4),Validators.maxLength(12)]],
      moblieno :['',[Validators.required,Validators.pattern('^(0|[0-9][0-9]*)$')]],
      dateofbirth:['',[Validators.required]],
      gender   :['']


       })
   }

  ngOnInit() {
  }


  verifyregister(){
    if(this.webregisterform.valid){
      this.myappservice.verifyregister(this.webregisterform.value).subscribe((res:any)=>{
        this.toastrService.success(res.responseBody.validationMsg,undefined,{


        })
      })

    }else{
      this.toastrService.error("please fill all given details",undefined,{

      })
    }
    }

    
  }


