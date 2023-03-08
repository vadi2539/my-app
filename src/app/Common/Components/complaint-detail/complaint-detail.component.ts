import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComplaintService } from '../../Service/complaint.service';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material';

export interface complaint {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.css']
})
export class ComplaintDetailComponent implements OnInit {

  complaintForm : FormGroup; 
  complaintlist :any[]=[];
  pin:any;
  complaints:complaint[]= [
    {value:'Air Conditioner', viewValue:'Air Conditioner'},
    {value:'Refrigerator', viewValue:'Refrigerator'},
    {value:'Washing Machine', viewValue:'Washing Machine'},
    {value:'RO Water Purifier', viewValue:'RO Water Purifier'},
    {value:'Inverter', viewValue:'Inverter'},
    {value:'DTH Dish', viewValue:'DTH Dish'}
  ];
name:any;
  constructor(public dialog: MatDialog,private _formbuilder: FormBuilder,private router: Router,public toastr:ToastrService,
    public complaintService:ComplaintService) { 

      this.complaintForm = this._formbuilder.group({
        complaints : ['', [Validators.required]],
        remarks : ['', [Validators.required]],
        address : ['',[Validators.required]],
        mobile:['',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]],
        name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]]
      })

    }

  ngOnInit() {
    debugger;
    this.name = sessionStorage.getItem('name');

  }

  
 
  submit(){
debugger;
    if(this.complaintForm.valid){
      var chars = "0123456789";   
      var string_length = 4; // This is the length of the Captcha    
      var ChangeCaptcha = '';
      for (var i=0; i<string_length; i++) {
       var rnum = Math.floor(Math.random() * chars.length);
        this.pin += chars.substring(rnum,rnum+1);
    }
    var lastFour = this.pin.substr(this.pin.length - 4);
    this.pin=lastFour;
    //end
      this.complaintlist = this.complaintForm.value.complaints;
      let obj = {         
        remarks:this.complaintForm.value.remarks,
        address :this.complaintForm.value.address,
        seqno:this.pin,
        username:sessionStorage.getItem('name'),
        name:this.complaintForm.value.name,
        mobile:this.complaintForm.value.mobile
      }
        this.complaintService.complaintdetails(obj,this.complaintlist).subscribe((res:any)=>{
        debugger;
        console.log(res);
        this.toastr.success(res.responseBody.validationMsg, undefined, {
          positionClass: 'toast-bottom-right',
          timeOut: 6000
     });
      this.router.navigate(["/complaint-list"]);
    })
    }else{
      this.toastr.error("Enter the Mandatory Details", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }
  }


  openchangepassDialog(): void {

    sessionStorage.getItem('userName');
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialogPopclass',
      width: '350px'
    });
  }


}
