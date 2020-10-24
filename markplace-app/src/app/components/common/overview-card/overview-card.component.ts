import { Component, Input, OnInit } from '@angular/core';
import { OverviewCardConfig } from './overview-card.model';

@Component({
  selector: 'common-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {

  @Input()
  config: OverviewCardConfig;

  constructor() { }

  ngOnInit() {
  }

}
