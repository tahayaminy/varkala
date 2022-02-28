import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  loadChildren:()=> import('./index/index.module').then(m=>m.IndexModule)},
  {path:'security',
    loadChildren:()=> import('./security/security.module').then(m=>m.SecurityModule)
  },
  {path:'category',
    loadChildren:()=> import('./category/category.module').then(m=>m.CategoryModule)
  },
  {path:'wishlist',
    loadChildren:()=> import('./wishlist/wishlist.module').then(m=>m.WishlistModule)
  },
  {path:'shopping',
  loadChildren:()=> import('./shopping/shopping.module').then(m=>m.ShoppingModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
