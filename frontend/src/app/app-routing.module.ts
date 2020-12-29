import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CommonModule} from '@angular/common';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { DisplayBlogsComponent } from './blogs/display-blogs/display-blogs.component';



const routes: Routes = [
  {path: 'appointment_home',component:AppointmentComponent},
  {path: 'appointment_list',component: AppointmentListComponent},
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: "AddBlog", component:AddBlogComponent},
  {path: "DisplayBlogs", component:DisplayBlogsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, SignupComponent]
