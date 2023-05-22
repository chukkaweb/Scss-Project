import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules 
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// componetns
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
