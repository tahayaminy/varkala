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
  page=0;
  itemInPage?:number;
  limitUp=4;
  limitDown=0;
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
        }
        this.products.push(arr);
        arr=[];
      }
      this.lastIndex=(per+1)*this.page;
      this.paginatorShow=true;
      console.log(this.products.length);
      this.pagination(0);
      this.limitDown=0;
      this.limitUp=4;
    }
    pagination(page){
      console.log(page);
      this.lastIndex=((this.itemInPage!)+1)*(page+1);
      this.firstIndex=(this.lastIndex)-(this.itemInPage!);
      this.page=page;
      console.log(this.products.length)
      if(page==(this.limitUp-1) && page!=(this.products.length-1)){
        this.limitUp++;
        this.limitDown++;
      }else if(page==(this.limitDown) && page!=0){
        this.limitUp--;
        this.limitDown--;
      }
    }

}
