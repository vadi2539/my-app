import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.css']
})
export class SignupPopupComponent implements OnInit {
  registercreateform:FormGroup;

  constructor(public formbulider:FormBuilder,public toastr:ToastrService) { 
    this.registercreateform=this.formbulider.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern('^[a-zA-Z0-9]+$')]],
      password:['',[Validators.required,Validators.maxLength(10)]],
      confirmpassword:['',[Validators.required,Validators.maxLength(10)]],
      date : ['',[Validators.required]],
      gender :['',[Validators.required]]

    })

    
    

  }

  ngOnInit() {
  }

}
