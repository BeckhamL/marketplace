import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recreating-main',
  templateUrl: './recreating-main.component.html',
  styleUrls: ['./recreating-main.component.scss']
})
export class RecreatingMainComponent implements OnInit {

  show = true;
  constructor() { 
  }

  ngOnInit() {
    this.show = true;
  }

  onChange($event: boolean) {
    this.show = !$event;
  }

}
