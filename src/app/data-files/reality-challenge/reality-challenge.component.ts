import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'data-reality-challenge',
  templateUrl: './reality-challenge.component.html',
  styleUrls: ['./reality-challenge.component.scss']
})
export class RealityChallengeComponent implements OnInit {
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit() {
  }

}
