import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Workshop } from 'src/app/models/workshop.model';
import { WorkshopService } from 'src/app/services/workshop.service';
import { ScrolledToDirective } from 'src/app/utility/directives/scrolled-to.directive';

@Component({
  selector: 'app-workshop-material',
  templateUrl: './workshop-material.component.html',
  styleUrls: ['./workshop-material.component.scss'],
})
export class WorkshopMaterialComponent implements OnInit, AfterViewInit {
  @ViewChild('scrolledToElement') hightlightElement;

  workshop: any;
  workshopData: any;
  isLoaded = false;

  constructor(private workshopService: WorkshopService) {}

  ngOnInit() {
    this.workshop = null;
    this.getWorkshop();
  }

  ngAfterViewInit() {}

  getWorkshop() {
    this.workshopService.getWorkshop().subscribe((workshop) => {
      this.workshop = workshop;
      this.workshopData = workshop[0];

      if (this.workshop && this.workshopData) {
        this.isLoaded = true;
      }
    });
  }
}
