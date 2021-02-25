import { Component, OnInit } from '@angular/core';
import { MiddleSeperatorModel } from 'src/app/models/middle-seperator.model';
import { SideNavModel } from 'src/app/models/side-nav.model';

@Component({
  selector: 'app-tools-main',
  templateUrl: './tools-main.component.html',
  styleUrls: ['./tools-main.component.scss'],
})
export class ToolsMainComponent implements OnInit {
  middleBanner: MiddleSeperatorModel = {
    topTitle: 'Tools & Resources',
    bottomTitle: 'It begins with blessing people and places',
    iconImages: [
      { icon: 'supervisor_account', text: 'colleagues' },
      { icon: 'assignment_ind', text: 'clients' },
      { icon: 'corporate_fare', text: 'workplace' },
    ],
  };

  content: SideNavModel = {
    content: [
      {
        title: 'Reality Challenge',
        description:
          'Take the Reality Challenge and see where you stand in the marketplace',
        file: 'reality_challenge.pdf'
      },
      {
        title: 'Journey @ Work',
        description: 'Learn from the highs and lows of your career',
        file: 'journey-at-work.pdf'
      },
      {
        title: 'Surviving @ Work',
        description: 'surviving-at-work.pdf',
        file: 'surviving-at-work.pdf'
      },
      {
        title: 'Make your move',
        description: 'surviving-at-work.pdf',
        file: 'make-your-move.pdf'
      },
      {
        title: 'Pray over my resume',
        description: 'pray-over-resume.pdf',
        file: 'pray-over-resume.pdf'
      },
      {
        title: 'Prayer of Examen',
        description: "Ask God to reveal what's on your heart",
      },
      {
        title: 'Bless your marketplace',
        description: 'You’ve got more influence than you think!',
        file: 'bless-your-marketplace.pdf'
      },
      {
        title: 'Ministry @ Work',
        description:
          'Take your work to a higher level and make a real difference',
      },
      {
        title: 'Mapping your influence',
        description: 'Who are the people I touch?',
        file: 'influence.pdf'
      },
      {
        title: 'Excel in service',
        description: 'You’ve got more influence than you think!',
        file: 'excel-in-service.pdf'
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
