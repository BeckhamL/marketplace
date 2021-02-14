import { Component, OnInit } from '@angular/core';
import { MiddleSeperatorModel } from 'src/app/models/middle-seperator.model';

@Component({
  selector: 'app-recreating-main',
  templateUrl: './recreating-main.component.html',
  styleUrls: ['./recreating-main.component.scss'],
})
export class RecreatingMainComponent implements OnInit {
  show = true;

  middleBanner: MiddleSeperatorModel = {
    topTitle: 'Resources & Content',
    bottomTitle: 'It begins with blessing people and places',
    iconImages: [
      { icon: 'supervisor_account', text: 'colleagues' },
      { icon: 'assignment_ind', text: 'clients' },
      { icon: 'corporate_fare', text: 'workplace' },
    ],
  };
  constructor() {}

  ngOnInit() {
    this.show = true;
  }

  onChange($event: boolean) {
    this.show = !$event;
  }
}
