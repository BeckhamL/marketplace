import { Component, OnInit } from '@angular/core';
import { SideNavModel } from 'src/app/models/side-nav.model';

@Component({
  selector: 'app-tools-main',
  templateUrl: './tools-main.component.html',
  styleUrls: ['./tools-main.component.scss'],
})
export class ToolsMainComponent implements OnInit {
  content: SideNavModel = {
    content: [
      {
        title: 'Reality Challenge',
        subLinks: [
          'Take the Reality Challenge and see where you stand in the marketplace',
        ],
      },
      {
        title: 'Journey @ Work',
        subLinks: ['Learn from the highs and lows of your career'],
      },
      {
        title: 'Surviving @ Work',
        subLinks: [],
      },
      {
        title: 'Prayer of Examen',
        subLinks: ["Ask God to reveal what's on your heart"],
      },
      {
        title: 'Bless your marketplace',
        subLinks: [],
      },
      {
        title: 'Ministry @ Work',
        subLinks: [
          'Take your work to a higher level and make a real difference',
        ],
      },
      {
        title: 'Mapping your influence',
        subLinks: [],
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
