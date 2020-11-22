import { Component, Input, OnInit } from '@angular/core';
import { FlipDirectionEnum } from './flip-card.model';
import { Router } from '@angular/router';
@Component({
  selector: 'common-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input()
  flipDirection: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickWorkshop() {
    this.router.navigate(['workshop/1']);
  }

}
