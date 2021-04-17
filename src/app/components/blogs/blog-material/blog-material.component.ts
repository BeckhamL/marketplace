import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-material',
  templateUrl: './blog-material.component.html',
  styleUrls: ['./blog-material.component.scss']
})
export class BlogMaterialComponent implements OnInit {

  blog: BlogModel;
  isLoaded = false;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getBlogData();
  }

  getBlogData() {
    this.blogService.getBlog(this.activatedRoute.snapshot.url[1].path).subscribe(blog => {
      this.blog = blog as BlogModel;
      if (this.blog) {
        this.isLoaded = true;
      }
    })
  }

}
