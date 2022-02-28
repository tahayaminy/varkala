import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { CommonShareModule } from '../common/common-share.module';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    CommonShareModule
  ],
  exports: [
    SecurityComponent
  ],
})
export class SecurityModule { }
