import { Component, ElementRef, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
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
  products: any ;
  srcProduct:any;
  firstIndex=1;
  lastIndex!:number;
  paginatorShow=false;
  page=1;
  itemInPage?:number;

  ngOnInit(): void {
    AOS.init();
    this.server.getDb().subscribe((val) => {this.srcProduct = val['products'];this.products = val['products'];this.lastIndex=this.products.length;});
  }
    sorts: Sort[] = [
      {index: 1,value: 'Default'},
      {index: 2,value: 'Rating'}
    ];
    selectedSort=1;

    
    @ViewChild('tow') tow!:ElementRef;
    @ViewChild('four') four!:ElementRef;
    @ViewChild('all') all!:ElementRef;

    itemPerPage(per){
      this.all.nativeElement.classList.remove('dark-1');
      this.itemInPage=per;
      this.products=[];
      var index=0;
      var arr:any=[]

      for(index;index<this.srcProduct.length;index+=(per+1)){
        for(let i=0;i<=per;i++){
          arr.push(this.srcProduct[i+index])
          console.log(i+index)
        }
        this.products.push(arr);
        arr=[];
      }
      this.lastIndex=(per+1)*this.page;
      this.paginatorShow=true;
    }

}
