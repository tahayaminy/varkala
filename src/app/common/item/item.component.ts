import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { Product } from 'src/assets/server/models/Product';
import { ItemService } from '../item.service';
import { ModalService } from '../modal.service';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data!:Product;

  heart=false;
  cart=false;

  localCart=localStorage.getItem("cart")!;
  localWish=localStorage.getItem("wish")!;
  Wishes=JSON.parse(this.localWish).items;
  Carts=JSON.parse(this.localCart).items;

  logged=false;
  constructor(public item:ServerService,public itemService:ItemService,public modal:ModalService) { }

  ngOnInit(): void {
    var profile=sessionStorage.getItem("userId");
    if(profile){
      let data=Number(profile);
      this.logged=true;
    }
    this.itemService.single.subscribe(data=>{
      if(data==this.data.id){
        this.cart=false;
      }
    });
    for(let item of this.Carts){
      if(item.id==this.data.id){
        this.cart=true;
      }
    }
    for(let item of this.Wishes){
      if(item.id==this.data.id){
        this.heart=true;
      }
    }
  }
  addWishlist(data){
    this.heart=!this.heart;
    this.itemService.addToWishlist(data);
  }
  removeWish(data){
    this.heart=!this.heart;
    this.itemService.removeWish(data);
  }
  addCart(data){
    this.cart=true;
    this.itemService.addToCart(data);
  }
  modalOpen(){
    this.modal.openTempDialog(this.data);
  }
}
