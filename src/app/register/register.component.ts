import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  salary: number;
  age: number;
  location: string;
  no:number;
  employeid:string;
}



const  ELEMENT_DATA: PeriodicElement[] = [

  {no: 1,employeid:'1001', name: 'Dhoni', salary:20000 , age: 23, location: 'Chennai'},
  {no: 2,employeid:'1023', name: 'Raina', salary:23454 , age: 24, location: 'Chennai'},
  {no: 3,employeid:'1033', name: 'kohil;', salary: 62839, age: 33, location: 'Chennai'},
  {no: 4,employeid:'1098', name: 'rutu', salary: 10079, age: 32, location: 'Chennai'},
  {no: 5,employeid:'1065', name: 'sachin', salary: 12234, age: 23, location: 'Chennai'},
  {no: 6,employeid:'1022', name: 'bravo', salary: 22336, age: 44, location: 'Chennai'},
  {no: 7,employeid:'1065', name: 'abd', salary: 54312, age: 32, location: 'Chennai'},
  {no: 8,employeid:'1044', name: 'pant', salary: 12456, age: 23, location: 'Chennai'},
  {no: 9,employeid:'1056', name: 'iyer', salary: 32456, age: 43, location: 'Chennai'},
  {no: 10,employeid:'1045', name: 'shadul', salary: 33466, age: 24, location: 'Chennai'},
  {no: 11,employeid:'1098', name: 'jadaja', salary: 23456, age: 27, location: 'Chennai'},
  {no: 12,employeid:'1043', name: 'rohit', salary: 23452, age: 34, location: 'Chennai'},
  {no: 13,employeid:'1094', name: 'warner', salary: 32453, age: 54, location: 'Chennai'},
  {no: 14,employeid:'1087', name: 'sahwag', salary: 12345, age: 36, location: 'Chennai'},
  {no: 15,employeid:'1072', name: 'yadhav', salary: 23456, age: 36, location: 'Chennai'},


   ]

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform:FormGroup;
  passType:"passtype";
  minDate: Date;
  maxDate: Date;
  isDisabled:boolean = true;
  displayedcolumns:string[]=['no','employeid','name','salary','location'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(public formbulider:FormBuilder) { 


    this.registerform=this.formbulider.group({
      name:['',[Validators.required]],
      gmail:['',[Validators.required,Validators.email,Validators.pattern((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
      password:['',[Validators.required,Validators.maxLength(12),Validators.minLength(4)]],
      date:[new Date('02/02/2022'),[Validators.required]],
      dateto:[new Date()],
      job:['',[Validators.required]]
    })

 const currentYear = new Date().getFullYear();
    this.minDate = new Date("02/02/2022");
    this.maxDate = new Date();
   
    
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
