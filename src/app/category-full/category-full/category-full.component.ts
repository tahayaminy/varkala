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
  sort;
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
      if(this.sort=="rate"){
        for (let loop = 0; loop < this.srcProduct.length; loop++) {
          for (let index = 0; index < this.srcProduct.length; index++) {
            if (
              this.srcProduct[index]?.['reviews'] >
              this.srcProduct[index + 1]?.['reviews']
            ) {
              let changing = this.srcProduct[index + 1];
              this.srcProduct[index + 1] = this.srcProduct[index];
              this.srcProduct[index] = changing;
            }
          }
        }
      }
       
    });
  }
  changeSort(sort){
    this.sort=sort;
  }

}
