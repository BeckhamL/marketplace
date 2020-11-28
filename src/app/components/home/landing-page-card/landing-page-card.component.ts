import { Component, OnInit, Input } from '@angular/core';
import { LandingCardConfig } from './landing-page-card.model';

@Component({
  selector: 'app-landing-page-card',
  templateUrl: './landing-page-card.component.html',
  styleUrls: ['./landing-page-card.component.scss']
})
export class LandingPageCardComponent implements OnInit {

  @Input()
  config: LandingCardConfig;
  
  constructor() { }

  ngOnInit() {
  }

}
