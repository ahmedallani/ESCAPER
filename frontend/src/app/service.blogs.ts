import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  httpOptions: any = {
    headers: new HttpClient({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}
  public createBlog(blog: any): Observable<any> {
    return this.http.post('http://localhost:3000/add', blog, this.httpOptions);
  }
}
