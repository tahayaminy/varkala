import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category/category.component';
import { IndexComponent } from './index/index/index.component';
import { SecurityComponent } from './security/security/security.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'security',component:SecurityComponent},
  {path:'category',component:CategoryComponent},
  {path:'wishlist',component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
