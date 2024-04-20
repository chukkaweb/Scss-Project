import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules 
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


// componetns
import { AppComponent } from './app.component';
import { PostsComponent } from './features/advanced-angular/posts/posts.component';
import { FormComponent } from './features/ngrx/basic/form/form.component';
import { TableComponent } from './features/ngrx/basic/table/table.component';
import { userReducer } from './features/ngrx/effects/user.reducer';
import { userEffect } from './features/ngrx/effects/user.effects';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({user:userReducer}),
    EffectsModule.forRoot([userEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
