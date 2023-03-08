import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


     homeform:FormGroup;
     minDate: Date;




  constructor( private formbulider: FormBuilder,public router:Router) { 

    this.homeform=this.formbulider.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gmail:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',Validators.required,Validators.minLength(4),Validators.maxLength(14)],
      moblie:['',Validators.required,Validators.pattern('^(0|[0-9][0-9]*)$')],
      gender:['',Validators.required],
      dateofbirth:['',Validators.required],
      option:['',Validators.required]


    })

    const currentYear = new Date().getFullYear();
    this.minDate = new Date();


  }

  ngOnInit() {

  }

    Login(){
       this.router.navigate(["websignup"]);
     }



}
