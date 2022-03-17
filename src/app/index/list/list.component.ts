import { Component, ElementRef, Input, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import AOS from 'aos';
interface Sort{
  index:number
  value:string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() index!:boolean;
    ngOnInit(): void {
      AOS.init();
    }
    sorts: Sort[] = [
      {index: 1,value: 'Default'},
      {index: 2,value: 'Rating'}
    ];
    selectedSort=1;
    fake=new Array(20);

}
