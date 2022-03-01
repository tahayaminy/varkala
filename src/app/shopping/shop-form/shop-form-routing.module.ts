import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  {
    path:'',
    component:AddressComponent
  },
  {
    path:'delivery',
    component:DeliveryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopFormRoutingModule { }
