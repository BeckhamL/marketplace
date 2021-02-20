import { Component, OnInit } from '@angular/core';
import { MiddleSeperatorModel } from 'src/app/models/middle-seperator.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recreating-main',
  templateUrl: './recreating-main.component.html',
  styleUrls: ['./recreating-main.component.scss'],
})
export class RecreatingMainComponent implements OnInit {
  show = true;

  middleBanner: MiddleSeperatorModel = {
    topTitle: 'It begins with blessing people and places',
    bottomTitle: 'It begins with blessing people and places',
    iconImages: [
      { icon: 'supervisor_account', text: 'colleagues' },
      { icon: 'assignment_ind', text: 'clients' },
      { icon: 'corporate_fare', text: 'workplace' },
    ],
  };
  constructor(private router: Router) {}

  ngOnInit() {
    this.getRoute();
  }

  getRoute() {
    if (this.router.url.split('/').pop() === 'ministry-@-work') {
      this.show = true; 
    } else {
      this.show = false;
    }
  }

  onChange($event: boolean) {
    if (this.show) {
      this.show = false
    }
  }

  onClickBack() {
    this.router.navigate(['/ministry-@-work']);
    this.show = true;
  }
}
