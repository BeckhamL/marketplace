import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Typed from 'typed.js';
import { BioDetailsComponent } from '../bio-details/bio-details.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  typed: Typed;
  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.typed = new Typed('#element', {
      strings: ['Learn', 'Grow', 'Think', 'Discover', 'Imagine'],
      typeSpeed: 120,
      backSpeed: 120,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      shuffle: false
    });
  }

  onClickOpenBioDetails() {
    const dialogRef = this.dialog.open(BioDetailsComponent, {
      width: '50vw',
      maxHeight: '70vh'
    })
  }

  onViewMore(route: string) {
    this.router.navigate(['/' + route])
  }

}
