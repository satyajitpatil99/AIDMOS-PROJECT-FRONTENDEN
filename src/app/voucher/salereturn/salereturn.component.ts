import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salereturn',
  templateUrl: './salereturn.component.html',
  styleUrls: ['./salereturn.component.css']
})
export class SalereturnComponent implements OnInit {
  salereturn:any;
  saledata:any;
  saledataadd:Array<any> = [];
  newAttribute:any=[];
  ngOnInit(): void {
    this.saledataadd.length = 1;
    throw new Error('Method not implemented.');
  }

  add(){
    this.saledataadd.push(this.newAttribute)
    this.newAttribute = {};
  }

}
