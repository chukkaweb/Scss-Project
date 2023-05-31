import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';

import { Testing1Component } from './testing1/testing1.component';


@NgModule({
  declarations: [Testing1Component],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
