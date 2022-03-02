import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  {
    path:'',
    component:AddressComponent
  },
  {
    path:'delivery',
    component:DeliveryComponent
  },
  {
    path:'confirm',
    component:ConfirmComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopFormRoutingModule { }
