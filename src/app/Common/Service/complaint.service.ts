
import { retry, catchError } from 'rxjs/operators';
import { GlobalService } from 'src/app/global.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient,private global:GlobalService) { }

  public login(loginForm){
    debugger;
    console.log(this.global.Baseurl+this.global.loginRouting,loginForm);
    return this.http.post(this.global.Baseurl+this.global.loginRouting,loginForm);
    }         
    public complaintdetails(obj,complaintlist){
     debugger;
     return this.http.post(this.global.Baseurl+this.global.complaintRouting+"/"+complaintlist,obj);
   } 

   public getcomplaintlist(username){
    debugger;
    return this.http.get(this.global.Baseurl+this.global.complaintlistRouting+"/"+username);
   }

   public getcomplaintdetails(data){
    debugger;
    return this.http.get(this.global.Baseurl+this.global.complaintdetailRouting+"/"+data);
   }

   public getPageLOVs(){
    return this.http.get(this.global.Baseurl+this.global.allocatorlistRouting);

   }

   public allocatorsubmit(obj,allocatorlist){
     debugger;
    return this.http.post(this.global.Baseurl+this.global.allocatorRouting+"/"+allocatorlist,obj);

   }

   public getcomplaintlistadmin(){
  return this.http.get(this.global.Baseurl+this.global.complaintlistadmin);

}

public closelist(obj){
  debugger;
  return this.http.post(this.global.Baseurl+this.global.closecomplaintlist,obj);
 
}
public getallocationlistadmin(){
  return this.http.get(this.global.Baseurl+this.global.allocationlistadmin);

}

public validateUser(username){
  return this.http.get(this.global.Baseurl+this.global.validateUser+"/"+username);

}
public registerUser(obj){
  return this.http.post(this.global.Baseurl+this.global.registerUser,obj);
}

public getallocationlist(name){
  return this.http.get(this.global.Baseurl+this.global.getallocationlist+"/"+name);

}
public changepassword(passwordform){
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(this.global.Baseurl+this.global.changepassword,passwordform,{headers:headers});
//local:4444/app/this.verifyEmail/test@gamil.com
}


public verifyEmail(obj){
  return this.http.post(this.global.Baseurl+this.global.verifyEmail,obj);
}

}
