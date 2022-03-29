import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopFormRoutingModule } from './shop-form-routing.module';
import { AddressComponent } from './address/address.component';
import { CommonShareModule } from 'src/app/common/common-share.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddressComponent,
    DeliveryComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ShopFormRoutingModule,
    CommonShareModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    AddressComponent,
    DeliveryComponent,
    ConfirmComponent
  ]
})
export class ShopFormModule { }
