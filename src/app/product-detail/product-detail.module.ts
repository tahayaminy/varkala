import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductComponent } from './product/product.component';
import { CommonShareModule } from '../common/common-share.module';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';


import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CommonShareModule,
    ProductDetailRoutingModule,
    MatSelectModule,
    FormsModule,
    SwiperModule,
    NgxImageZoomModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductDetailModule { }
