import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AddBlogService}from '../../add-blog.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  blogForm: FormGroup;
  constructor(private FormBuilde:FormBuilder,private servise:AddBlogService) {
    this.blogForm = this.FormBuilde.group({
     title:["",Validators.required],
     image:["",Validators.required],
     Body:["",Validators.required] 
    });
  }
  blog={
    title:"",
    image:"",
    Body:""
  }
  create() {
    this.blog = this.blogForm.value;
    console.log(this.blog);
    this.servise.createBlog(this.blog).subscribe((data) => {
        console.log(data)
       alert ("created blog")})
    }

  ngOnInit(): void {}
}
