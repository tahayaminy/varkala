import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  Wishlist: number[] = [];
  Cart: number[] = [];

  addToWishlist(id: number) {
    var index = this.Wishlist.indexOf(id);
    if (index > -1) {
      this.Wishlist.splice(index, 1);
    } else {
      this.Wishlist.push(id);
    }
  }

  addToCart(id: number) {
    var index = this.Cart.indexOf(id);
    if (index > -1) {
      this.Cart.splice(index, 1);
    } else {
      this.Cart.push(id);
    }
  }
}
