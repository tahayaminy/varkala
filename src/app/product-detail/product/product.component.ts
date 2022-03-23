import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { ActivatedRoute } from '@angular/router';

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
    
  constructor(public server:ServerService,private router:ActivatedRoute) { }

  notif=true;
  productId;
  product;
  randomProducts:any[]=[];
  category;
  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>this.productId=Number(params.get('id')));
    this.server.getDb().subscribe(val=>{
      val["products"].map(obj=>{
        if(obj.id==this.productId){
          this.product=obj;
        }
      })
    });
    this.server.getDb().subscribe(val=>{
      val["categories"].map(obj=>{
        if(obj.id==this.product?.category){
          this.category=obj.name;
        }
      })
    });
    this.server.getDb().subscribe(val=>{
      var arr=val["products"];
      var i=11;
      while(i>=0){
      var x=Math.floor(Math.random() * (i+1));
      this.randomProducts?.push(arr[x]);
      arr.splice(x,1);
      i--;
    }
    console.log(this.randomProducts);
    });    
  }
  sorts: Sort[] = [
    {index: 1,value: 'Small'},
    {index: 2,value: 'Medium'},
    {index: 3,value: 'Large'}
  ];
  selectedSort=1;

  
}
