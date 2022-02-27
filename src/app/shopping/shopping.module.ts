import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    CartComponent,
    AddressComponent,
    DeliveryComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
