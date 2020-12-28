import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { DisplayBlogsComponent } from './blogs/display-blogs/display-blogs.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AddBlogComponent, DisplayBlogsComponent, LoginComponent, SignupComponent],
  // imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule , MatToolbarModule],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
