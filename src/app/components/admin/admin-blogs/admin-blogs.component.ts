import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { CustomSnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss'],
  providers: [
    CustomSnackbarService 
  ]
})
export class AdminBlogsComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private blogService: BlogService,
    private snackbarService: CustomSnackbarService
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
    });
  }

  onSubmitBlog() {
    this.blogService.postBlog(this.formGroup.value).subscribe((res) => {
      if (res) {
        this.snackbarService.open('Blog successfully posted!');
        this.formGroup.reset();
      }
    });
  }
}
