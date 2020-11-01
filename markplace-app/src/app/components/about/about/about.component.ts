import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BioDetailsComponent } from '../bio-details/bio-details.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onClickOpenBioDetails() {
    console.log('here')
    const dialogRef = this.dialog.open(BioDetailsComponent, {
      width: '500px'
    })
  }

}
