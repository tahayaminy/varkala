import { Component, ElementRef, Input, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import AOS from 'aos';
import { ServerService } from 'src/app/server.service';
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

  constructor(public server: ServerService) { }
  @Input() index!:boolean;
  products: any;
  ngOnInit(): void {
    AOS.init();
    this.server.getDb().subscribe((val) => (this.products = val['products']));
  }
    sorts: Sort[] = [
      {index: 1,value: 'Default'},
      {index: 2,value: 'Rating'}
    ];
    selectedSort=1;

}
