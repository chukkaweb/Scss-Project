import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules 
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// componetns
import { AppComponent } from './app.component';
import { PostsComponent } from './features/advanced-angular/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
    
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
