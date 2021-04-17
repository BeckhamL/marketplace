import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workshop } from '../models/workshop.model';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private httpClient: HttpClient) {}

  getBlog() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get('/blogs/blogs');
  }

  postBlog(blog: BlogModel) {
    return this.httpClient.post<BlogModel>('/blogs/blog', blog);
  }
}
