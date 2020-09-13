import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Workshop } from 'src/app/models/workshop.model';
import { ScrolledToDirective } from 'src/app/utility/directives/scrolled-to.directive';

@Component({
  selector: 'app-workshop-material',
  templateUrl: './workshop-material.component.html',
  styleUrls: ['./workshop-material.component.scss']
  
})
export class WorkshopMaterialComponent implements OnInit, AfterViewInit {

  @ViewChild('scrolledToElement') hightlightElement;

  @Input()
  workshop: Workshop;
  
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
  }

}
