import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkshopListItem } from 'src/app/models/workshop.model';

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
      title: 'test 1',
      briefSummary: 'this is a sum',
      briefDescription: ' this is a desc',
    },
    {
      title: 'test 2',
      briefSummary: 'this is a sum',
      briefDescription: ' this is a desc',
    },
    {
      title: 'test 3',
      briefSummary: 'this is a sum',
      briefDescription: ' this is a desc',
    },
  ];
  constructor() {}

  ngOnInit() {}

  onExpansionPanelOpen(item: WorkshopListItem) {
    this.clickedWorkshop.emit(item);
  }
}
