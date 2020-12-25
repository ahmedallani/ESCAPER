import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { DisplayBlogsComponent } from './blogs/display-blogs/display-blogs.component';

@NgModule({
  declarations: [AppComponent, AddBlogComponent, DisplayBlogsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
