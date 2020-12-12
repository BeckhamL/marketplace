import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outline } from 'src/app/models/outlines.model';
@Component({
  selector: 'common-overview-card-large',
  templateUrl: './overview-card-large.component.html',
  styleUrls: ['./overview-card-large.component.scss']
})
export class OverviewCardLargeComponent implements OnInit {

  @Input()
  outline: Outline;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickViewOutline() {
    this.router.navigate([`outline/${this.outline?.id}`])
  }

}
