import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'common-overview-card-large',
  templateUrl: './overview-card-large.component.html',
  styleUrls: ['./overview-card-large.component.scss']
})
export class OverviewCardLargeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickViewOutline() {
    this.router.navigate(['outline/1'])
  }

}
