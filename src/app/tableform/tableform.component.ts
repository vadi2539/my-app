

import {  Component, OnInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatVerticalStepper } from '@angular/material';

export interface PeriodicElement {
  no:number;
  appicationNumber: string;
  appicationName: string;
  vertical: string;
  status: string;
  appicationType:string;
  createdDate:number;
  submittedDate:number;

}


const  ELEMENT_DATA: PeriodicElement[] = [

  {no: 1,appicationNumber:'1001', appicationName: 'Dhoni', createdDate:20-4-2021 , submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 2,appicationNumber:'1023', appicationName: 'Raina', createdDate:20-4-2021 , submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 3,appicationNumber:'1033', appicationName: 'kohil;', createdDate: 20-4-2021, submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 4,appicationNumber:'1098', appicationName: 'rutu', createdDate: 20-4-2021, submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 5,appicationNumber:'1065', appicationName: 'sachin', createdDate: 20-4-2021, submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 6,appicationNumber:'1022', appicationName: 'bravo', createdDate: 20-4-2021, submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 7,appicationNumber:'1065', appicationName: 'abd', createdDate: 20-4-2021, submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},
  {no: 8,appicationNumber:'1044', appicationName: 'pant', createdDate: 20-4-2021, submittedDate: 20-4-2021, appicationType: 'institution',vertical:'agri Enterpises',status:'CC Approved'},



   ]


@Component({
  selector: 'app-tableform',
  templateUrl: './tableform.component.html',
  styleUrls: ['./tableform.component.css']
})
export class TableformComponent implements OnInit {

     displayedColumns:string[]=['no','appicationNumber','appicationName','vertical','status','appicationType','createdDate','submittedDate'];
     dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
     filterform:FormGroup;
 
     constructor(public builder:FormBuilder){
       this.filterform = this.builder.group({
        filter:['']
       })

     }
     

     @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    ngOnInit() {
      this.dataSource.paginator = this.paginator;      
      this.dataSource.sort = this.sort;  

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
}
}