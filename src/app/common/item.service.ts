import { EventEmitter, Injectable } from '@angular/core';
import { Category } from 'src/assets/server/models/Category';
import { Product } from 'src/assets/server/models/Product';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  localCart=localStorage.getItem("cart")!;

  Cart=JSON.parse(this.localCart).items;
  Wishlist: any[] = [];
  price:number=0;

  single=new Subject<any>();
  list=new Subject<any>();
  constructor(private http:HttpClient) {}

  addToCart(data) {
    var index = this.Cart.indexOf(data);
    if (index > -1) {
      this.Cart.splice(index, 1);
    } else {
      this.Cart.push(data);
    }
    localStorage.setItem("cart",`{"items":${JSON.stringify(this.Cart)}}`);
    this.list.next(this.Cart);
    this.calcPrice()
    this.single.next(this.price);

  }
  removeCart(data){
    var index = this.Cart.indexOf(data);
    this.Cart.splice(index, 1);
    this.single.next(data.id);
    this.calcPrice();
    localStorage.setItem("cart",`{"items":${JSON.stringify(this.Cart)}}`);
    this.list.next(this.Cart)
  }
  calcPrice(){
    this.price=0;
    for(let item of this.Cart){
      this.price=this.price+((item.price)-(((item.price)*(item.discount.percent))/100));
    }
    localStorage.setItem("price",`${this.price}`);
  }



  addToWishlist(data) {
    var index = this.Wishlist.indexOf(data);
    if (index > -1) {
      this.Wishlist.splice(index, 1);
    } else {
      this.Wishlist.push(data);
    }
  }
}
