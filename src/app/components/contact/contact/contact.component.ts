import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { CustomSnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [
    CustomSnackbarService 
  ]
})
export class ContactComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private contactService: ContactService, private snackbarService: CustomSnackbarService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      message: new FormControl('', [Validators.required]),
    });
  }

  onClickSubmit() {
    if (this.checkFormErrors()) {
      console.log(this.formGroup.errors);
    } else {
      this.contactService
        .postMessageUs(this.formGroup.value)
        .subscribe((res) => {
          if (res) {
            this.snackbarService.open('Message successfully sent!');
            this.formGroup.reset();
          }
        });
    }
  }

  onClickCancel() {
    if (confirm('Are you sure you want to clear your message?')) {
      this.formGroup.reset();
    }
  }

  // optimize later
  checkFormErrors(): boolean {
    Object.keys(this.formGroup.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.formGroup.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          return true;
        });
      }
    });
    return false;
  }
}
