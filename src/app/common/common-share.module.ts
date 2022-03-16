import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { DialogComponent } from './dialog/dialog.component';
import { SwiperModule } from 'swiper/angular';

import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ItemComponent } from './item/item.component';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [NavbarComponent,ProductListComponent, ProductPreviewComponent, DialogComponent, ItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSidenavModule,
    RouterModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    SwiperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  exports:[NavbarComponent,ProductListComponent]
})
export class CommonShareModule { }
