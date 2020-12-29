import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  selectedFile: any= null
  myGroup :any;
  title:any;
  Body:any;
  constructor(
    private http: HttpClient,
    private formbuilder: FormBuilder
  ) {
    this.myGroup = this.formbuilder.group({
      title: ["", Validators.required],
      Body:["", Validators.required]
    })
  }
  onFileSlected(event: any){
    console.log(event)
    this.selectedFile = event.target.files[0]
  }
  blog={
    title:"",
    Body:""
  }
  onUpload(){
   
    const fd = new FormData();
    fd.append("image",this.selectedFile,this.selectedFile.name);
    fd.append("title", this.title);
    fd.append("Body",this.Body)
    this.http.post('/api/blogs/',fd).subscribe(res => {
      console.log(res);
    })
  }

 

  ngOnInit(): void {}
}
