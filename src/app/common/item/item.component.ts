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

  constructor(public item:ServerService,public itemService:ItemService,public modal:ModalService) { }
  @Input() data!:Product;
  
  heart=false;
  cart=false;
  cartList=this.itemService.Cart;
  ngOnInit(): void {
    this.itemService.tst.subscribe(data=>{
      this.cart=data
    })
  }
  addWishlist(data){
    this.heart=!this.heart;
    this.itemService.addToWishlist(data);
  }
  addCart(data){
    this.cart=true;
    this.itemService.addToCart(data);
    console.log(this.cartList)
  } 
  modalOpen(){
    this.modal.openTempDialog(this.data);
  }
}
