import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService{

  public loginRouting ="/signin";
  public complaintRouting ="/saveComplaint";
  public complaintlistRouting ="/complaintListing";
  public complaintdetailRouting ="/complaintdetail";
  public allocatorlistRouting ="/allocatorList";
  public allocatorRouting ="/allocationSubmit";
  public complaintlistadmin ="/complaintlistadmin";
  public closecomplaintlist ="/closecomplaintlist";
  public Baseurl: string = environment.baseURL;
  public name : string = "";
  public allocationlistadmin ="/allocationlistadmin";
  public validateUser ="/validateUser";
  public registerUser ="/submitusercreation";
  public getallocationlist ="/getallocationlist";
  public changepassword ="/resetpassword";
  public verifyEmail = "/verifyEmail";
  public verifypassword ="/verifypassword";
  public verifymoblieno="/verifymobileno";
  public confirmpassword="/confirmpassword";
  public lastname="/lastname";
  public verifyfirstname="/verifyfirstname"
  public  register="/register"
  public  verifygmail="/verifygmail"
  public  login="/login"
  public verifyregister="/verifyregister"
  constructor(private router: Router, private toastr : ToastrService) { }

}
