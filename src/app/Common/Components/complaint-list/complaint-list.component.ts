import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ComplaintService } from '../../Service/complaint.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material';


export interface PeriodicElement {
  no: number;
  complaint: string;
  remarks: string;
  address: string;
  date:string;
}



@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})


export class ComplaintListComponent implements OnInit {
name:any;

  constructor(public router:Router, public complaintService:ComplaintService,public dialog: MatDialog) { }

  displayedColumns: string[] = ['no','date' ,'complaint', 'remarks', 'address',"status"];

  dataSource ;
  complaintList :PeriodicElement[] =[];
  resultsLength = 0;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    debugger;
    this.getcomplaintlist();
    this.name = sessionStorage.getItem('name');
  }



  getcomplaintlist(){
  var username = sessionStorage.getItem('name');
    this.complaintService.getcomplaintlist(username).subscribe((res:any) => {
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
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data" : element.no,
        "flowMode" : "EDIT"
      }
    }
    this.router.navigate(["/complaint-alignment"], navigationExtras);
  }

  openchangepassDialog(): void {

    sessionStorage.getItem('userName');
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialogPopclass',
      width: '350px'
    });
  }


}
