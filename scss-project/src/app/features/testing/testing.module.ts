import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule } from './testing-routing.module';
import { Testing1Component } from './testing1/testing1.component';
import { TestingHeaderComponent } from './testing-header/testing-header.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    Testing1Component, 
    TestingHeaderComponent, 
    FormsComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ],bootstrap:[
    Testing1Component
  ]
})
export class TestingModule { }
