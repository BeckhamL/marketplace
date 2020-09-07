import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  innerWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickNavigation(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
