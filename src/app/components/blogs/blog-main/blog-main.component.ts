import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import * as moment from 'moment';
@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss'],
})
export class BlogMainComponent implements OnInit {

  blogs: BlogModel[];
  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(blogs => {
     this.blogs = blogs as BlogModel[];
     this.blogs.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }

  onClickBlog(blog: BlogModel) {
    this.router.navigate(['/blog/' + blog.title]);
  }
}
