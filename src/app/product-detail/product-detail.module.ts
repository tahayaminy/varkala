import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductComponent } from './product/product.component';
import { CommonShareModule } from '../common/common-share.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CommonShareModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
