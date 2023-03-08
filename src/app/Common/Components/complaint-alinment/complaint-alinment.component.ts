import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../../Service/complaint.service';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material';

export interface allocator {
  value: string;
  key: string;
}

@Component({
  selector: 'app-complaint-alinment',
  templateUrl: './complaint-alinment.component.html',
  styleUrls: ['./complaint-alinment.component.css']
})


export class ComplaintAlinmentComponent implements OnInit {

  data:any;
  flowMode:any;
  address:any;
  remarks:any;
  list:any;
  name:any;
  Name:any;
  mobile:any;
  allocators:any[] = [];
  allocatorForm: FormGroup;
  allocatorlist:any[]=[];
  constructor(private toastr: ToastrService,public dialog: MatDialog,private _formbuilder: FormBuilder, public router:Router,private route: ActivatedRoute, public complaintService:ComplaintService) {

    this.allocatorForm=this._formbuilder.group({
      allocator: ['',[Validators.required]]
    });

   }

  ngOnInit() {
    debugger;
    this.name = sessionStorage.getItem('name');
    this.route.queryParams.subscribe(params => {
      this.data = params["data"];      
      this.flowMode = params["flowMode"];  
    });
    this.complaintService.getcomplaintdetails(this.data).subscribe((res:any) => {
      debugger;
      this.list = res.responseBody.details[0].complaint;
      this.remarks = res.responseBody.details[0].remarks;
      this.address = res.responseBody.details[0].address;
      this.Name = res.responseBody.details[0].name;
      this.mobile =res.responseBody.details[0].mobile;
    })
    this.getAllLOvs();
  }


  getAllLOvs(){
    this.complaintService.getPageLOVs().subscribe((res:any)=>{
      if(res.responseBody != undefined){
        console.log("LOVs",res.responseBody);
        this.allocators = res.responseBody.allocatorlist;
      }
    })
  }


  Submit(){
    debugger;
    this.allocatorForm.value.data = this.allocatorForm.get('allocator').value;
    this.allocatorlist = this.allocatorForm.value.data;
    let obj = {         
      sno:this.data,
    }
    this.complaintService.allocatorsubmit(obj,this.allocatorlist).subscribe((res:any)=>{
      if(res.responseBody != undefined){
        this.toastr.success(res.responseBody.validationMsg, undefined, {
          positionClass: 'toast-bottom-right',
          timeOut: 6000
     });
      }
      this.router.navigate(["/admin-allocation-list"]);

    })
  }

  goBackPage() {
    window.history.back();
  }

  openchangepassDialog(): void {

    sessionStorage.getItem('userName');
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialogPopclass',
      width: '350px'
    });
  }

}
