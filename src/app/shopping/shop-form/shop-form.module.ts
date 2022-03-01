import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopFormRoutingModule } from './shop-form-routing.module';
import { AddressComponent } from './address/address.component';
import { CommonShareModule } from 'src/app/common/common-share.module';
import { DeliveryComponent } from './delivery/delivery.component';


@NgModule({
  declarations: [
    AddressComponent,
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    ShopFormRoutingModule,
    CommonShareModule
  ],
  exports:[
    AddressComponent,
    DeliveryComponent
  ]
})
export class ShopFormModule { }
