import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MyappService } from '../Common/Service/myapp.service';

@Component({
  selector: 'app-serviceform',
  templateUrl: './serviceform.component.html',
  styleUrls: ['./serviceform.component.css']
})
export class ServiceformComponent implements OnInit {

  serviceform:FormGroup;
  

  constructor(public formbulider:FormBuilder,public toastr:ToastrService,public myappservice:MyappService) { 

    this.serviceform=this.formbulider.group({

      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      gmail:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required,,Validators.minLength(4),Validators.maxLength(12)]],
      confirmpassword:['',[Validators.required,,Validators.minLength(4),Validators.maxLength(12)]],
      moblieno:['',[Validators.required,Validators.pattern('^(0|[0-9][0-9]*)$')]],
      dateofbirth:['',[Validators.required]],
      gender:['']


    })
  }

  ngOnInit() {}

   verifyfirstname(){
    var name=this.serviceform.value.name;
    this.myappservice.verifyfirstname(name).subscribe((res:any)=>{
      console.log(res);
    })

    }

    register(){
      debugger;
       if(this.serviceform.valid){
         
         this.myappservice.register(this.serviceform.value).subscribe((res:any)=>{
           this.toastr.success(res.responseBody.validationMsg, undefined,{

           })
           
         })
        }else{
          this.toastr.error("please fill all given details", undefined,{

          })

        }
       }

       


    }


  

  

 
    
    
  


