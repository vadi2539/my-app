import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Builder } from 'protractor';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
     
    demoForm:FormGroup;
    
  constructor(private formbulider:FormBuilder,public toastr:ToastrService) {
    
        
         this.demoForm=this.formbulider.group({
          number:['',[Validators.required,Validators.maxLength(15),Validators.minLength(4)]],
         })

   }

  ngOnInit() {
  }

}
