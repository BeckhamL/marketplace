import { Component, Input, OnInit } from '@angular/core';
import { FlipDirectionEnum } from './flip-card.model';

@Component({
  selector: 'common-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input()
  flipDirection: string;
  
  constructor() { }

  ngOnInit() {
  }

}
