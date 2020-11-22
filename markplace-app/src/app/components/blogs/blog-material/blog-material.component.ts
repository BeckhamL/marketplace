import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-material',
  templateUrl: './blog-material.component.html',
  styleUrls: ['./blog-material.component.scss']
})
export class BlogMaterialComponent implements OnInit {

  blog: any;
  isLoaded = false;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogData();
  }

  getBlogData() {
    this.blogService.getBlog().subscribe(blog => {
      this.blog = blog;
      if (this.blog) {
        this.isLoaded = true;
      }
    })
  }

}
