import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { CommonShareModule } from '../common/common-share.module';


@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    CommonShareModule
  ],
  exports: [
    ShoppingComponent
  ]
})
export class ShoppingModule { }
