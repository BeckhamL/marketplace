import { Component, Input, OnInit } from '@angular/core';
import { SideNavModel } from 'src/app/models/side-nav.model';

@Component({
  selector: 'common-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() content?: SideNavModel;
  
  constructor() { }

  ngOnInit() {
  }

}
