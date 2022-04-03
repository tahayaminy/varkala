import { Component, OnInit } from '@angular/core';
import {Product} from "../../../assets/server/models/Product";
import {Router} from "@angular/router";
import {ItemService} from "../../common/item.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  localCart=localStorage.getItem("cart")!;
  cart=JSON.parse(this.localCart).items;
  Cart={
    item:undefined,
    price: undefined,
    num: 1,
    total:1
  };
  shoppingCart=[this.Cart];

  orderTotal=0;
  total=0;
  constructor(public router:Router,public itemService:ItemService) { }
  ngOnInit(): void {
    this.createData();
  }
  createData(){
    this.shoppingCart=[this.Cart];
    for(let item of this.cart){
      this.shoppingCart.push({item:item,price:item.price,num:1,total: item.price});
    }
    this.itemService.list.subscribe(data=>{
      this.cart=data;
    });
    this.shoppingCart.shift();
    console.log(this.shoppingCart);
    this.totalprice();
  }
  increase(id){
    this.shoppingCart[id].num++;
    this.shoppingCart[id].total=this.shoppingCart[id].num * this.shoppingCart[id].price!;
    this.totalprice();
  }
  decrease(id){
    if(this.shoppingCart[id].num-1>0){
      this.shoppingCart[id].num--;
      this.shoppingCart[id].total=this.shoppingCart[id].num * this.shoppingCart[id].price!;
      this.totalprice();
    }
  }

  totalprice(){
    this.orderTotal=0;
    for(let item of this.shoppingCart){
      this.orderTotal+=item.total;
    }
    this.total=this.orderTotal+10;
  }
  form(){
    localStorage.setItem("shoppingCart",`{"items":${JSON.stringify(this.shoppingCart)}}`)
    this.router.navigate(["shopping/form"]);
  }
  removeCart(data){
    console.log('run')
    this.itemService.removeCart(data);

    this.itemService.list.subscribe(data=>{
      this.cart=data;
    })
    this.createData();
  }
}
