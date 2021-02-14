import { Component, Input, OnInit } from '@angular/core';
import { MiddleSeperatorModel } from 'src/app/models/middle-seperator.model';

@Component({
  selector: 'common-middle-seperator',
  templateUrl: './middle-seperator.component.html',
  styleUrls: ['./middle-seperator.component.scss'],
})
export class MiddleSeperatorComponent implements OnInit {
  @Input() config: MiddleSeperatorModel;

  constructor() {}

  ngOnInit() {}
}
