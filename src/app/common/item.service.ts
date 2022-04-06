import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

if(localStorage.getItem("cart") === null){localStorage.setItem("cart",'{"items":[]}');}
if(localStorage.getItem("wish") === null){localStorage.setItem("wish",'{"items":[]}');}


@Injectable({
  providedIn: 'root',
})
export class ItemService {
  localCart=localStorage.getItem("cart")!;
  localWish=localStorage.getItem("wish")!;
  Cart=JSON.parse(this.localCart).items;
  Wishlist=JSON.parse(this.localWish).items;
  price:number=0;

  single=new Subject<any>();
  list=new Subject<any>();
  wishes=new Subject<any>();
  pricew=new Subject<any>();
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
    let i=0
    for(let x of this.Cart){
      if(x.id == data.id){
        index=i;
      }
      i++;
    }
    i=0;
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
    this.pricew.next(this.price)
  }



  addToWishlist(data) {
    var index;
    index=this.Wishlist.indexOf(data);
    if (index > -1) {
      this.Wishlist.splice(index, 1);
    } else {
      this.Wishlist.push(data);
    }
    localStorage.setItem("wish",`{"items":${JSON.stringify(this.Wishlist)}}`);
    this.wishes.next(this.Wishlist);
  }
  removeWish(data){
    var index = this.Wishlist.indexOf(data);
    this.Wishlist.splice(index, 1);
    localStorage.setItem("wish",`{"items":${JSON.stringify(this.Wishlist)}}`);
    this.wishes.next(this.Wishlist)
  }
}
