import { Component, OnInit, Input } from '@angular/core';
import { Workshop } from 'src/app/models/workshop.model';

@Component({
  selector: 'app-workshop-material',
  templateUrl: './workshop-material.component.html',
  styleUrls: ['./workshop-material.component.scss']
})
export class WorkshopMaterialComponent implements OnInit {

  @Input()
  workshop: Workshop;
  
  constructor() { }

  ngOnInit() {
  }

}
