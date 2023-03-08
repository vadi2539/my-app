import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  items: string;
  quantity: string;
  no: number;
  rate:number;
  
}

   const  ELEMENT_DATA: PeriodicElement[]=[
      {no: 1,items:'onion', quantity: '1', rate:20 },
      {no: 2,items:'milk', quantity: '1', rate:120 },       
      {no: 3,items:'curd', quantity: '1', rate:200 },
      {no: 4,items:'bisket', quantity: '1', rate:45 },
      {no: 5,items:'maida', quantity: '4', rate:230 },
      {no: 6,items:'lays', quantity: '1', rate:25 },
      {no: 7,items:'maggi', quantity: '1', rate:76 },
      {no: 8,items:'soup', quantity: '1', rate:275 },
      {no: 9,items:'shampoo', quantity: '1', rate:25 },
      {no: 10,items:'atta', quantity: '1', rate:65 }

   ]

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  displayedColumns:string[]=['no','items','quantity','rate'];
  datasourcenew= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filteroption:FormGroup;
  

  constructor( public formbulider:FormBuilder) { 

    this.filteroption=this.formbulider.group({
      filter:['']
    })
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  


  ngOnInit() {
debugger;
    this.datasourcenew.paginator = this.paginator;      
      this.datasourcenew.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasourcenew.filter = filterValue.trim().toLowerCase();

    if (this.datasourcenew.paginator) {
      this.datasourcenew.paginator.firstPage();
    }

  }

  

}
