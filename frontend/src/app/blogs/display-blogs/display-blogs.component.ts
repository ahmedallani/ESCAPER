import { Component, OnInit } from '@angular/core';
import { AddBlogService } from 'src/app/add-blog.service';

@Component({
  selector: 'app-display-blogs',
  templateUrl: './display-blogs.component.html',
  styleUrls: ['./display-blogs.component.css'],
})
export class DisplayBlogsComponent implements OnInit {
  blogs: any = [];
  image: any = 'nader.jpg';
  constructor(private servise: AddBlogService) {}
  public deleteblog(id: any) {
    this.servise.deleteblog(id).subscribe((data) => {
      this.ngOnInit();
    });
  }
  ngOnInit(): void {
    this.servise.displayBlogs().subscribe((data) => {
      this.blogs = data;
      console.log({ data: this.blogs });
    });
  }
}
