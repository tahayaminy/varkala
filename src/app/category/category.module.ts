import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CommonShareModule } from '../common/common-share.module';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CommonShareModule
  ],
  exports: [
    CategoryComponent
  ],
})
export class CategoryModule { }
