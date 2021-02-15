import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { CustomSnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    CustomSnackbarService 
  ]
})
export class EmailInputComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private emailService: EmailService, private snackbarService: CustomSnackbarService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  onSubmitEmail() {
    if (!this.formGroup.controls['email']?.errors) {
      this.emailService.postEmail(this.formGroup.value).subscribe(res => {
        if (res) {
          this.snackbarService.open('Email successfully sent!');
          this.formGroup.reset();
        }
      });
    } else {
      alert('errors on form')
    }

  }
}
