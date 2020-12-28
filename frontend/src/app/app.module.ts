import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { DisplayBlogsComponent } from './blogs/display-blogs/display-blogs.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    DisplayBlogsComponent,
    HomeComponent,
    TestComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
