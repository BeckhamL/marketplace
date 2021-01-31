import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-circle-icon',
  templateUrl: './circle-icon.component.html',
  styleUrls: ['./circle-icon.component.scss'],
})
export class CircleIconComponent implements OnInit {
  
  @Input() icon?: string;
  @Input() color?: string;

  constructor() {}

  ngOnInit() {}
}
