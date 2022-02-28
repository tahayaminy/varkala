import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CommonShareModule } from '../common/common-share.module';
import { WishlistRoutingModule } from './wishlist-routing.module';



@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    CommonShareModule,
    WishlistRoutingModule
  ],
  exports: [
    WishlistComponent
  ],
})
export class WishlistModule { }
