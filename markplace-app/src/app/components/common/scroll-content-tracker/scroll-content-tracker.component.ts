import { Component, OnInit, Input } from '@angular/core';
import { Workshop } from 'src/app/models/workshop.model';

@Component({
  selector: 'app-scroll-content-tracker',
  templateUrl: './scroll-content-tracker.component.html',
  styleUrls: ['./scroll-content-tracker.component.scss']
})
export class ScrollContentTrackerComponent implements OnInit {

  @Input()
  currentWorkshop: Workshop;

  highlightPoints = [];

  constructor() {}

  ngOnInit() {
    this.getTitles();
  }

  getTitles() {
    this.currentWorkshop.part.forEach(part => {
      part.topic.forEach(topic => {
        this.highlightPoints.push(topic);
      })
    })
  }

}
