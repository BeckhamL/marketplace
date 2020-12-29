import { Component, OnInit } from '@angular/core';
import { StepperConfig } from 'src/app/models/stepper.model';

@Component({
  selector: 'app-rethinking-main',
  templateUrl: './rethinking-main.component.html',
  styleUrls: ['./rethinking-main.component.scss']
})
export class RethinkingMainComponent implements OnInit {

  stepperValue: StepperConfig[] = [
    {label: 'Where am I?'},
    {label: 'Where have I been?'},
    {label: 'What\'s my passion?'},
    {label: 'Where do I want to go?'},
    {label: 'What\'s holding me back?'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
