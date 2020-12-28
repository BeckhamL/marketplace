import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Typed from 'typed.js';
import { BioDetailsComponent } from '../bio-details/bio-details.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  typed: Typed;
  constructor(private dialog: MatDialog) { }

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
    console.log('here')
    const dialogRef = this.dialog.open(BioDetailsComponent, {
      width: '500px'
    })
  }

}
