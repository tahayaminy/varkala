import { EventEmitter, Injectable } from '@angular/core';
import { Category } from 'src/assets/server/models/Category';
import { Product } from 'src/assets/server/models/Product';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ItemService {

  Wishlist: any[] = [];
  Cart: any[] = [];
  price:number=0;

  tst=new Subject<boolean>();

  constructor(private http:HttpClient) {}


  addToWishlist(data) {
    var index = this.Wishlist.indexOf(data);
    if (index > -1) {
      this.Wishlist.splice(index, 1);
    } else {
      this.Wishlist.push(data);
    }
  }

  addToCart(data) {
    var index = this.Cart.indexOf(data);
    if (index > -1) {
      this.Cart.splice(index, 1);
    } else {
      this.Cart.push(data);
    }
    this.price=0;
    for(let item of this.Cart){
      this.price=this.price+((item.price)-(((item.price)*(item.discount.percent))/100));
    }
    localStorage.setItem("price",`${this.price}`);
  }
  removeCart(data){
    var index = this.Cart.indexOf(data);
    this.Cart.splice(index, 1);
    this.tst.next(false);
  }

  wishCart(id){
    let wish = this.Wishlist.indexOf(id);
    let wishExist;
    if (wish > -1) {
      wishExist=true;
    } else {
      wishExist=false;
    }

    let cart = this.Cart.indexOf(id);
    let cartExist;
    if (cart > -1) {
      cartExist=true;
    } else {
      cartExist=false;
    }
    return {wish:wishExist,cart:cartExist};
  }
}
