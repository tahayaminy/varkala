import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path:'',
    component:ShoppingComponent,
  },
  {
    path:'form',
    loadChildren:()=> import('./shop-form/shop-form.module').then(m=>m.ShopFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
