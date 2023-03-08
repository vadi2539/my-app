import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formFiled:FormGroup;

  constructor(public FormBulider:FormBuilder,public toaster:ToastrService) {
    this.formFiled=this.FormBulider.group({
      
      textForm:['',[Validators.required]]
    })
   }

  ngOnInit() {
  }

  
    submitBtn(){
      debugger;
      if(this.formFiled.valid){
        this.toaster.success("Given Data is True");

       
      }else {
    
        this.toaster.error("Given Is Invaild",undefined,{
    
          positionClass:'toast-bottom-right',
    
        });
    
      
      }
  }



}
