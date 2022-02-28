import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CommonShareModule } from '../common/common-share.module';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    CommonShareModule,
    SwiperModule,
  ],
  exports:[IndexComponent]
})
export class IndexModule { }
