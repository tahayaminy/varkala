import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';



@NgModule({
  declarations: [
    ShoppingComponent
  ],
  exports:[
    ShoppingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
