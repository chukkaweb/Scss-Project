import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { HeaderComponent } from '../core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class SharedModule { }
