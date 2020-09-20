import { Component, OnInit } from '@angular/core';
import { Outline } from 'src/app/models/outlines.model';

@Component({
  selector: 'app-outline-main',
  templateUrl: './outline-main.component.html',
  styleUrls: ['./outline-main.component.scss'],
})
export class OutlineMainComponent implements OnInit {
  outlines: Outline[] = [
    {
      title: 'Saints @ Work',
      date: 'June 2020',
      description: '10:30 - 11:30 am, EST Canada on Zoom!',
      instructors: ['Pastor David', 'RHCCC Marketplace Ministry Team'],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
