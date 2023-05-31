import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssRoutingModule } from './scss-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScssComponent } from './scss/scss.component';


@NgModule({
  declarations: [
    ScssComponent
  ],
  imports: [
    CommonModule,
    ScssRoutingModule,
    SharedModule
  ]
})
export class ScssModule { }
