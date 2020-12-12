import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkshopListItem } from 'src/app/models/workshop.model';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss'],
})
export class WorkshopListComponent implements OnInit {
  @Output()
  clickedWorkshop = new EventEmitter<WorkshopListItem>();

  fakeItems: WorkshopListItem[] = [
    {
      title: 'When God shows up @ Work',
      briefSummary: 'In this workshop we will navigate the workplace',
      briefDescription:
        'Finding meaning in the workplace can be difficult, learn to pick your battles',
      longDescription:
        'Donec vitae consectetur nibh, vitae sodales ligula. Ut eu augue quis odio efficitur dictum sed vitae est. Nulla id vestibulum sem. Sed id augue nulla. Nam cursus nisi vitae tortor lobortis volutpat. Nam vulputate dictum risus, quis auctor magna sagittis ut. Nulla dignissim mauris quis purus volutpat',
        dates: ['Oct 7', 'Nov 15', 'Dec 22'],
        demographic: ['Office workers', 'Business owners'],
        duration: '4 weeks',
        benefit: 'Understand your purpose in the workforce'
    }
  ];
  workshops: any;
  constructor(private workshopService: WorkshopService) {}

  ngOnInit() {
    this.workshopService.getAllWorkshops().subscribe(workshops => {
      this.workshops = workshops
    })
  }

  onExpansionPanelOpen(item: WorkshopListItem) {
    this.clickedWorkshop.emit(item);
  }
}
