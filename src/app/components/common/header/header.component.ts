import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  innerWidth = window.innerWidth;
  currentRoute = '';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(() => {
      this.currentRoute = location.path().replace('/','');
    });
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  onClickNavigation(path: string) {
    this.router.navigate([`/${path}`]);
  }

  onClickMobileMenu() {
    let links = document.getElementById('nav-links')
    if (links) {
      links.classList.toggle('is-active')
    }
  }

  onClickLink() {
    let links = document.getElementById('nav-links')
    if (links.classList.contains('is-active')) {
      links.classList.remove('is-active')
    }
  }
}
