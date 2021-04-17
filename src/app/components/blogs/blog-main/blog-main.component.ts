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
    this.blogService.getBlog().subscribe(blogs => {
     this.blogs = blogs as BlogModel[];
     

    });
  }

  onClickBlog() {
    this.router.navigate(['/blog/1']);
  }
}
