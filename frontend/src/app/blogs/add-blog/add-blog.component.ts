import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  selectedFile: any= null
  constructor(
    private http: HttpClient
  ) {}
  onFileSlected(event: any){
    console.log(event)
    this.selectedFile = event.target.files[0]
  }
  onUpload(){
    const fd = new FormData();
    fd.append("image",this.selectedFile,this.selectedFile.name)
    this.http.post('/api/blogs/',fd).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {}
}
