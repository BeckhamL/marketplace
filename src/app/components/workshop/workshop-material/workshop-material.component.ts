import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Workshop } from 'src/app/models/workshop.model';
import { WorkshopService } from 'src/app/services/workshop.service';
import { ScrolledToDirective } from 'src/app/utility/directives/scrolled-to.directive';

@Component({
  selector: 'app-workshop-material',
  templateUrl: './workshop-material.component.html',
  styleUrls: ['./workshop-material.component.scss'],
})
export class WorkshopMaterialComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scrolledToElement') hightlightElement;

  workshop: any;
  workshopData: any;
  isLoaded = false;
  routeSub: Subscription;

  constructor(private workshopService: WorkshopService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.workshop = null;
    this.routeSub = this.route.params.subscribe(params => {
      this.getWorkshop(params['id']);
    });
    
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getWorkshop(id: number) {
    this.workshopService.getOneWorkshop(id).subscribe((workshop) => {
      this.workshop = workshop;
      this.workshopData = workshop;

      if (this.workshop && this.workshopData) {
        this.isLoaded = true;
      }
    });
  }
}
