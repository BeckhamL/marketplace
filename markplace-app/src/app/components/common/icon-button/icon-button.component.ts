import { Component, Input, OnInit } from '@angular/core';
import { IconButtonConfig } from './icon-button-config';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input()
  config: IconButtonConfig;
  
  constructor() { }

  ngOnInit() {
  }

}
