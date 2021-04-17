import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/services/blog.service';
import { CustomSnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss'],
  providers: [CustomSnackbarService],
})
export class AdminBlogsComponent implements OnInit {
  formGroup: FormGroup;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '10',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  constructor(
    private blogService: BlogService,
    private snackbarService: CustomSnackbarService
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(''),
      shortDescription: new FormControl(''),
      content: new FormControl(''),
      date: new FormControl(new Date()),
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
