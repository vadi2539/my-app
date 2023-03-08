import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(public global :GlobalService,public http:HttpClient) {  }


    public verifypassword(password){
     return this.http.get(this.global.Baseurl+this.global.verifypassword+"/"+password)
    }

    public verifymoblieno(moblieno){
      return this.http.get(this.global.Baseurl+this.global.verifymoblieno+"/"+moblieno);

    }
    public verifyconfirmpassword(obj){
     return this.http.post(this.global.Baseurl+this.verifyconfirmpassword,obj);

    }
    public verifylastname(lastname,firstname){
     // http://localhost:4444/app/verifylastname?lastname=vadi&&firstname=narayana 
      return this.http.get(this.global.Baseurl+this.verifylastname+"?lastname="+lastname+"&&fistname="+firstname);

    }

    public verifyfirstname(firstname){
   return this.http.get(this.global.Baseurl+this.verifyfirstname+"/"+firstname);
    }


    public register(obj){
      return this.http.post(this.global.Baseurl+this.global.register,obj);

    }


    public verifygmail(obj){
      return this.http.post(this.global.Baseurl+this.verifygmail,obj);
    }

    public login(obj){
      return this.http.post(this.global.Baseurl+this.login,obj)
    }

    public verifyregister(obj){

      return this.http.post(this.global.Baseurl+this.verifyregister,obj);

    }


  }
  

