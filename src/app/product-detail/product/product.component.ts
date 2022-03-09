import { Component, OnInit, ViewEncapsulation } from '@angular/core';
interface Sort{
  index:number
  value:string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sorts: Sort[] = [
    {index: 1,value: 'Small'},
    {index: 2,value: 'Medium'},
    {index: 3,value: 'Large'}
  ];
  selectedSort=1;
}
