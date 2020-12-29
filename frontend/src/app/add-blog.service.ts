import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddBlogService {
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httclient: HttpClient) {}
  createBlog(b: any): Observable<any> {
    return this.httclient.post(
      '/api/blogs/',
      b,
      this.httpOptions
    );
  }
  displayBlogs(): Observable<any> {
    return this.httclient.get(
      'http://localhost:3000/api/blogs/',
      this.httpOptions
    );
  }
  deleteblog(id: any): Observable<any> {
    return this.httclient.delete(
      'http://localhost:3000/api/blogs/' + id,
      this.httpOptions
    );
  }
}
