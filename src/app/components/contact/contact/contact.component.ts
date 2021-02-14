import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }

  onClickSubmit() {
    this.contactService.postMessageUs(this.formGroup.value).subscribe(res => {
      console.log(res);
    });
  }

  onClickCancel() {

  }
}
