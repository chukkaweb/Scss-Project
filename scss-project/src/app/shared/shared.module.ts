import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { HeaderComponent } from '../core/header/header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports:[
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class SharedModule { }
