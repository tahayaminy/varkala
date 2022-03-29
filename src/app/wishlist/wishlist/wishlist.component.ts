import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/common/item.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(public item:ItemService) { }

  ngOnInit(): void {
  }
  wishlist=this.item.Wishlist;
}
