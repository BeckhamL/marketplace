import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onClickSubmit() {
    if (this.formGroup.hasError) {
      alert('errors')
    } else {
      this.contactService.postMessageUs(this.formGroup.value).subscribe((res) => {
        console.log(res);
      });
    }

  }

  onClickCancel() {
    if (confirm('Are you sure you want to clear your message?')) {
      this.formGroup.reset();
    }
  }
}
