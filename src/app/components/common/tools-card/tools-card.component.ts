import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-tools-card',
  templateUrl: './tools-card.component.html',
  styleUrls: ['./tools-card.component.scss']
})
export class ToolsCardComponent implements OnInit {

  @Input()
  title?:string;

  @Input()
  description?: string;
  
  constructor() { }

  ngOnInit() {
  }

}
