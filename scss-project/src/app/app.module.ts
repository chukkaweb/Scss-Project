import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules 
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// componetns
import { AppComponent } from './app.component';
import { PostsComponent } from './features/advanced-angular/posts/posts.component';
import { FormComponent } from './features/ngrx/basic/form/form.component';
import { TableComponent } from './features/ngrx/basic/table/table.component';
import { userReducer } from './features/ngrx/basic/userReducer';


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
    SharedModule,
    StoreModule.forRoot({user:userReducer}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
