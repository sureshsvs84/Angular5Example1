import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnName:string="Add Items";
  textValue:string="first items";
  items=[];

  addItem(){
    this.items.push(this.textValue);
    this.itemCount = this.items.length;
    this.textValue =''
  }



  constructor() { }

  ngOnInit() {
    this.itemCount = this.items.length;
   }

}
