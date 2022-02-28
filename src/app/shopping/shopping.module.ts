import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { CartComponent } from './cart/cart.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    ShoppingComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ShareModule
  ],
  exports:[
    ShoppingComponent
  ]
})
export class ShoppingModule { }
