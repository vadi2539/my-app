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
  date: string;
  name: string;
  mobile: string;
}

@Component({
  selector: 'app-sagent-allocation-list',
  templateUrl: './sagent-allocation-list.component.html',
  styleUrls: ['./sagent-allocation-list.component.css']
})
export class SagentAllocationListComponent implements OnInit {

  name:any;
  constructor(public router:Router,public dialog: MatDialog, public complaintService:ComplaintService,private toastr: ToastrService) { }

  displayedColumns: string[] = ['no','date','name','mobile', 'complaint', 'remarks', 'address','status'];

  dataSource ;
  complaintList :PeriodicElement[] =[];
  resultsLength = 0;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    debugger;
    this.getallocationlist();
    this.name = sessionStorage.getItem('name');
  }

  getallocationlist(){
    var name =sessionStorage.getItem('username');
    this.complaintService.getallocationlist(name).subscribe((res:any) => {
      if(res.responseBody != undefined){
        debugger;
        console.log("Allocation Listing :", res.responseBody);
        this.complaintList = res.responseBody.Allocationlist;
        console.log("Listing:", this.complaintList)
        this.dataSource = new MatTableDataSource(this.complaintList);
        this.dataSource.paginator = this.paginator;
      }
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
