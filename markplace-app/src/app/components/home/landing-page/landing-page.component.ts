import { Component, OnInit } from '@angular/core';
import {
  LandingCardConfig,
  LandingCardPosition,
} from '../landing-page-card/landing-page-card.model';
import Typed from 'typed.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  landingCards: LandingCardConfig[];
  typed: Typed;

  constructor(private router: Router) {}

  ngOnInit() {
    this.typed = new Typed('#element', {
      strings: ['Learn', 'Grow', 'Think', 'Discover'],
      typeSpeed: 100,
      backSpeed: 80,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      shuffle: true,
    });
    this.landingCards = [
      {
        textPosition: LandingCardPosition.left,
        imagePosition: LandingCardPosition.right,
        textValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lectus ante, euismod pulvinar finibus nec, eleifend in nulla. Suspendisse eu.',
        imageValue: '/assets/images/planning.svg',
      },
      {
        textPosition: LandingCardPosition.right,
        imagePosition: LandingCardPosition.left,
        textValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lectus ante, euismod pulvinar finibus nec, eleifend in nulla. Suspendisse eu.',
        imageValue: '/assets/images/growth.svg',
      },
      {
        textPosition: LandingCardPosition.left,
        imagePosition: LandingCardPosition.right,
        textValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo turpis in scelerisque tristique. Morbi pretium elit quis egestas cursus. Pellentesque in nisl non nulla aliquet congue at.',
        imageValue: '/assets/images/security.svg',
      },
    ];
  }

  onClickViewAllBlogs() {
    this.router.navigate(['/blogs']);
  }
}
