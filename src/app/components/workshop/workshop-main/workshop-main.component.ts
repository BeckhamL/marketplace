import { Component, OnInit } from '@angular/core';
import { Workshop, WorkshopListItem } from '../../../models/workshop.model';
import { Router } from '@angular/router';
import { WorkshopService } from 'src/app/services/workshop.service';
@Component({
  selector: 'app-workshop-main',
  templateUrl: './workshop-main.component.html',
  styleUrls: ['./workshop-main.component.scss'],
})
export class WorkshopMainComponent implements OnInit {
  workshopData: Workshop = {
    title: 'When God shows up @ Work',
    author: 'David Lau',
    id: 1,
    part: [
      {
        topic: [
          {
            duration: '30 min',
            points: [
              'A reluctant worker: no choie at all!',
              'A diligent worker, gained trust, and earned the right to speak',
              'A trusting child, God-conscious enough to know when to speak',
              'A compassionate heart, could have stayed silent, but risked her neck to help',
              'An unamed worker: but not forgotten',
              'Never saw the full picture in which she played a pivotal part: but did it anyway',
            ],
            title: "A little guy's story: 2 Kings 5:1-4",
          },
          {
            title: 'Whats your story?',
          },
          {
            title: 'A police officers story',
            points: [
              'About 3 years ago Office Joe gave a young man a ticket',
              'Went to traffic court',
              'Young man came to church, sought prayer',
              'Young man fined, but no demerit points!',
              'As the young man left, Office Joe said: " Good luck, sir!"',
              'Recently young man, now Christian, met officier in church lobby',
              'Remembered each other. Office was happy to hear the young mans faith. Then added: "I was with a Baptist church but no longer practicing. But maybe I should go back"',
            ],
          },
        ],
      },
      {
        topic: [
          {
            duration: '15 min',
            title: '"Discovering God @ Work": an individual excercise',
            description:
              'Think of one great moment or one rotten day during the past week/month. Ask:',
            points: [
              'What happened?',
              'Why did it happen?',
              'Where was God when it happened?',
              'What have I learned from this?',
            ],
          },
        ],
      },
      {
        topic: [
          {
            duration: '15 min',
            title: 'Break into pairs to share discovery',
            description: 'Pray for each other',
            points: [
              "In case you're not prepared to share details of your discovery, simply ask the other person to pray for a specific need you have at work",
            ],
          },
        ],
      },
      {
        topic: [
          {
            duration: '30 min',
            points: [
              'A reluctant worker: no choie at all!',
              'A diligent worker, gained trust, and earned the right to speak',
              'A trusting child, God-conscious enough to know when to speak',
              'A compassionate heart, could have stayed silent, but risked her neck to help',
              'An unamed worker: but not forgotten',
              'Never saw the full picture in which she played a pivotal part: but did it anyway',
            ],
            title: "A little guy's story: 2 Kings 5:1-4",
          },
          {
            title: 'Whats your story?',
          },
          {
            title: 'A police officers story',
            points: [
              'About 3 years ago Office Joe gave a young man a ticket',
              'Went to traffic court',
              'Young man came to church, sought prayer',
              'Young man fined, but no demerit points!',
              'As the young man left, Office Joe said: " Good luck, sir!"',
              'Recently young man, now Christian, met officier in church lobby',
              'Remembered each other. Office was happy to hear the young mans faith. Then added: "I was with a Baptist church but no longer practicing. But maybe I should go back"',
            ],
          },
        ],
      },
    ],
  };

  clickedWorkshopToShow: WorkshopListItem = null;

  constructor(
    private router: Router,
    private workshopService: WorkshopService
  ) {}

  ngOnInit() {}

  onShowWorkshop(item: WorkshopListItem) {
    this.clickedWorkshopToShow = item;
  }

  onClickViewMore() {
    this.router.navigate(['/workshop/1']);
  }
}
