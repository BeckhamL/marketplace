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
        description:
          'Take the Reality Challenge and see where you stand in the marketplace',
      },
      {
        title: 'Journey @ Work',
        description: 'Learn from the highs and lows of your career',
      },
      {
        title: 'Surviving @ Work',
        description: '',
      },
      {
        title: 'Prayer of Examen',
        description: "Ask God to reveal what's on your heart",
      },
      {
        title: 'Bless your marketplace',
        description: '',
      },
      {
        title: 'Ministry @ Work',
        description:
          'Take your work to a higher level and make a real difference',
      },
      {
        title: 'Mapping your influence',
        description: '',
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
