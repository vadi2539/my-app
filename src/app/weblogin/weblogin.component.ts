import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyappService } from '../Common/Service/myapp.service';

@Component({
  selector: 'app-weblogin',
  templateUrl: './weblogin.component.html',
  styleUrls: ['./weblogin.component.css']
})
export class WebloginComponent implements OnInit {


  webloginform:FormGroup;
  passtype:"password";

  constructor(public formbulider:FormBuilder,public router:Router,public toastrservice:ToastrService,public myappservice:MyappService) { 

    this.webloginform=this.formbulider.group({

      gmail:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required]]
     
    
    })
 
  }

  ngOnInit() {
  }


  verifygmail(){

    let obj={

    gmail:this.webloginform.value.gmail,
    password:this.webloginform.value.gmail

    }

    this.myappservice.verifygmail(obj).subscribe((res:any)=>{
      console.log(res);
    })

    
  }


   login(){

    if(this.webloginform.valid){
      this.myappservice.login(this.webloginform.value).subscribe((res:any)=>{
        this.toastrservice.success(res.responseBody.validationMsg, undefined,{

        })
      })
    }else{

      this.toastrservice.error("please fill all given detail",undefined,{

      })

    }
  }

  signup(){
    this.router.navigate(["webregister"]);
  }
      
}


