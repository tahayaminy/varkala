import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryFullRoutingModule } from './category-full-routing.module';
import { CategoryFullComponent } from './category-full/category-full.component';
import { CommonShareModule } from '../common/common-share.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ListComponent } from './list/list.component';


import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryFullComponent,
    SidebarComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CategoryFullRoutingModule,
    CommonShareModule,
    MatExpansionModule,
    NgxSliderModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    CategoryFullComponent,ListComponent
  ]
})
export class CategoryFullModule { }
