import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './dashboard.guard';

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
    loadChildren:()=> import('./wishlist/wishlist.module').then(m=>m.WishlistModule),
    canLoad:[DashboardGuard]
  },
  {path:'shopping',
    loadChildren:()=> import('./shopping/shopping.module').then(m=>m.ShoppingModule),
    canLoad:[DashboardGuard]
  },
  {
    path:'category-full',
    loadChildren:()=>import('./category-full/category-full.module').then(m=>m.CategoryFullModule)
  },
  {
    path:'product/:id',
    loadChildren:()=>import('./product-detail/product-detail.module').then(m=>m.ProductDetailModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [DashboardGuard]
})
export class AppRoutingModule { }
