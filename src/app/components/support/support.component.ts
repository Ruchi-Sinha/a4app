import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  // data supplied to the data table
  private data: any[]= [{name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"},
  {name:"abc", email:"abc", age: 34, city:"ghi"}];
  // array of currently selected entities in the data table
  selectedEntities: any[];
  showBulkAction:boolean=  false;

  constructor() { }

  ngOnInit() {
  }

  // function to handle data/entities selected/deselected in the table
  public setSelectedEntities($event: any) {
     this.selectedEntities = $event;
     if(this.selectedEntities.length > 0){
      this.showBulkAction = true;
     }
     else{
      this.showBulkAction = false;
     }
     console.log("selected items are:"+ this.selectedEntities);
  }

}
