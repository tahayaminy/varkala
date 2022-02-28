import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { CommonShareModule } from '../common/common-share.module';
import { SecurityRoutingModule } from './security-routing.module';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    CommonShareModule,
    SecurityRoutingModule
  ],
  exports: [
    SecurityComponent
  ],
})
export class SecurityModule { }
