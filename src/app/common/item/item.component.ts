import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { Product } from 'src/assets/server/models/Product';
import { ItemService } from '../item.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(public item:ServerService,public itemService:ItemService,public modal:ModalService) { }
  @Input() data!:Product;
  ngOnInit(): void {
  }
  heart=false;
  addWishlist(id:number){
    this.heart=!this.heart;
    this.itemService.addToWishlist(id);
  }
  addCart(id:number){
    this.itemService.addToCart(id);
  } 
  modalOpen(){
    this.modal.openTempDialog(this.data);
  } 

}
