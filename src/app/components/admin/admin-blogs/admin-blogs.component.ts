import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitBlog(event) {
    event.preventDefault()
    console.log('submit')
  }

}
