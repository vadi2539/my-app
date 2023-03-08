import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';



export interface PeriodicElement {
  items: string;
  quantity: string;
  no: number;
  rate:number;

}


const  ELEMENT_DATA: PeriodicElement[] = [

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
  selector: 'app-formfilter',
  templateUrl: './formfilter.component.html',
  styleUrls: ['./formfilter.component.css']
})
export class FormfilterComponent implements OnInit {
  filterform:FormGroup;
  displayedColumns:string[]=['no','items','quantity','rate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  minDate: Date;
  maxDate: Date;
  isDisabled:boolean = true;

  constructor(public formbulider:FormBuilder,public dialog:MatDialog,public router: Router) {
    this.filterform=this.formbulider.group({
      filter:[''], 
      date:[new Date('01/01/2022'),[Validators.required]],
      dateto:[new Date()]
      
    })

    
  

    const currentYear = new Date().getFullYear();
    this.minDate = new Date("01/01/2022");
    this.maxDate = new Date();

    

   }
   @ViewChild(MatSort, {static: true}) sort: MatSort;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    
    this.dataSource.paginator = this.paginator;      
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  

  }

    refresh(){
    debugger;
    this.dataSource= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    }
 
     openprofile(){
      this.router.navigate(["profile"]);

      
    }
 



}

