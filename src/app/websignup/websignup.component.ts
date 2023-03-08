import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-websignup',
  templateUrl: './websignup.component.html',
  styleUrls: ['./websignup.component.css']
})
export class WebsignupComponent implements OnInit {

  websignupform:FormGroup;

  constructor(public formbuilder:FormBuilder,public router: Router) {

    this.websignupform=this.formbuilder.group({
      login:['',[Validators.required]],
      password:['',[Validators.required]]

    })
   }

  ngOnInit() {
  }

  register(){

  this.router.navigate(["webformregister"]);
  }

}
