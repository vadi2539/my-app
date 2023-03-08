import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ComplaintService } from '../../Service/complaint.service';
import { debug } from 'util';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
  no: number;
  complaint: string;
  remarks: string;
  address: string;
  name:string;
  mobile:string;
  date:string;
}



@Component({
  selector: 'app-admin-complaint-list',
  templateUrl: './admin-complaint-list.component.html',
  styleUrls: ['./admin-complaint-list.component.css']
})
export class AdminComplaintListComponent implements OnInit {
name:any;
  constructor(public router:Router, public dialog: MatDialog,public complaintService:ComplaintService,private toastr: ToastrService) { }

  displayedColumns: string[] = ['no','name','mobile', 'complaint', 'remarks', 'address','date','status','action'];

  dataSource ;
  complaintList :PeriodicElement[] =[];
  resultsLength = 0;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    debugger;
    this.getcomplaintlistadmin();
    this.name = sessionStorage.getItem('name');

  }



  getcomplaintlistadmin(){
    this.complaintService.getcomplaintlistadmin().subscribe((res:any) => {
      if(res.responseBody != undefined){
        debugger;
        console.log("Promotion Listing :", res.responseBody);
        this.complaintList = res.responseBody.complaintlist;
        console.log("Listing:", this.complaintList)
        this.dataSource = new MatTableDataSource(this.complaintList);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  edit(element){
    debugger;
 if(element.status =="Allocated"){
  this.router.navigate(["/admin-allocation-list"]);
 }else{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data" : element.sno,
        "flowMode" : "EDIT"
      }
    }
    this.router.navigate(["/complaint-alignment"], navigationExtras);
  }
  }

  close(element){
    debugger;
    let obj = {         
      sno:element.sno,
      flex:"CLOSE",
    }
    this.complaintService.closelist(obj).subscribe((res:any)=>{
    debugger;
    if(res.responseBody != undefined){
      this.toastr.success(res.responseBody.validationMsg, undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }
    this.getcomplaintlistadmin();

    })
  }


  openchangepassDialog(): void {

    sessionStorage.getItem('userName');
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialogPopclass',
      width: '350px'
    });
  }


}
