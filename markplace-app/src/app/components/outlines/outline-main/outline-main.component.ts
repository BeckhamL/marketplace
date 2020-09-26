import { Component, OnInit } from '@angular/core';
import { Outline } from 'src/app/models/outlines.model';

@Component({
  selector: 'app-outline-main',
  templateUrl: './outline-main.component.html',
  styleUrls: ['./outline-main.component.scss'],
})
export class OutlineMainComponent implements OnInit {
  outline: Outline = {
    title: 'Saints @ Work',
    date: 'June 2020',
    description: '10:30 - 11:30 am, EST Canada on Zoom!',
    instructors: ['Pastor David', 'RHCCC Marketplace Ministry Team'],
    scriptures: [
      'Genesis 1-4',
      'Ephesians 2:1-10,4:17-6:18',
      'Matthew 22:37-39',
      'John 14:16',
    ],
  };
  constructor() {}

  ngOnInit() {}
}
