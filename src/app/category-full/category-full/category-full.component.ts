import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-category-full',
  templateUrl: './category-full.component.html',
  styleUrls: ['./category-full.component.scss']
})
export class CategoryFullComponent implements OnInit {

  constructor(public server:ServerService) { }
  srcProduct;
  ngOnInit(): void {
    this.server.getDb().subscribe((val) => {
      this.srcProduct = val['products'];
    });
  }
  changeFilter(filter){
    this.srcProduct=[];
    this.server.getDb().subscribe((val) => {
      val['products'].map(item=>{
        if(item.category==filter){
          this.srcProduct.push(item);
          console.log(this.srcProduct);
        }
      })
       
    });
  }

}
