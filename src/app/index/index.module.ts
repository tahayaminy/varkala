import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CommonShareModule } from '../common/common-share.module';
import { SwiperModule } from 'swiper/angular';
import { IndexRoutingModule } from './index-routing.module';
import { ListComponent } from './list/list.component';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    IndexComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    CommonShareModule,
    SwiperModule,
    IndexRoutingModule,
    MatSelectModule,
    FormsModule,TranslateModule
  ],
  exports:[IndexComponent,ListComponent]
})
export class IndexModule { }
