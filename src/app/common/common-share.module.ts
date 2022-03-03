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

@NgModule({
  declarations: [NavbarComponent,ProductListComponent],
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
    FormsModule
  ],
  exports:[NavbarComponent,ProductListComponent]
})
export class CommonShareModule { }
