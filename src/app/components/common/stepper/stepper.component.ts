import { Component, Input, OnInit } from '@angular/core';
import { StepperConfig } from 'src/app/models/stepper.model';

@Component({
  selector: 'common-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input()
  stepperConfig: StepperConfig[];
  
  constructor() { }

  ngOnInit() {
  }

}
