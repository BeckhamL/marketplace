import { Component, Input, OnInit } from '@angular/core';
import { Outline } from 'src/app/models/outlines.model';

@Component({
  selector: 'app-outlines-material',
  templateUrl: './outlines-material.component.html',
  styleUrls: ['./outlines-material.component.scss']
})
export class OutlinesMaterialComponent implements OnInit {

  @Input()
  outlines: Outline[];
  
  constructor() { }

  ngOnInit() {
  }

}
