import { Component, OnInit } from '@angular/core';
import {Product} from "../../../assets/server/models/Product";
interface Shopping{
  item:Product;
  price:number;
  num:number;
}
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
    num: 1
  };
  shoppingCart=[this.Cart];
  constructor() { }
  ngOnInit(): void {
    for(let item of this.cart){
      this.Cart.item=item;
      this.Cart.price=item.price;
      this.Cart.num=1;
      this.shoppingCart?.push(this.Cart);
    }
    this.shoppingCart.shift();
    console.log(this.shoppingCart)
  }
  tst(txt){
    console.log(txt)
  }
}
