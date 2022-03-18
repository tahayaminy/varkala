import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';
import { CommonShareModule } from './common/common-share.module';
import { IndexModule } from './index/index.module';
import { CategoryModule } from './category/category.module';
import { SecurityModule } from './security/security.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CommonModule } from '@angular/common';
import { ShoppingModule } from './shopping/shopping.module';
import { ShopFormModule } from './shopping/shop-form/shop-form.module';
import { CategoryFullModule } from './category-full/category-full.module';
import { ProductDetailModule } from './product-detail/product-detail.module';

import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonShareModule,
    IndexModule,
    CategoryModule,
    SecurityModule,
    WishlistModule,
    ShoppingModule,
    ShopFormModule,
    CategoryFullModule,
    ProductDetailModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
