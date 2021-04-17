import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss'],
})
export class BlogMainComponent implements OnInit {
  blog: BlogModel = {
    title: 'What it means to thrive in the workplace',
    author: 'David Lau',
    date: new Date(),
    content:
      'Ut rhoncus aliquam neque, ac ornare nisl congue id. Nam mattis malesuada lacus a tempor. In semper semper ipsum. Suspendisse potenti. Aliquam sodales orci turpis, nec ullamcorper sapien blandit quis. Praesent at mollis lectus, id viverra felis. Vestibulum venenatis ante non facilisis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec venenatis arcu. Vestibulum pulvinar congue imperdiet. Donec sed ante consectetur, rutrum neque sed, gravida quam. Curabitur luctus fermentum commodo.',
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  onClickBlog() {
    this.router.navigate(['/blog/1']);
  }
}
