import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFullComponent } from './category-full/category-full.component';

const routes: Routes = [
  {
    path:'',
    component:CategoryFullComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryFullRoutingModule { }
