import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.scss']
})
export class BioDetailsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BioDetailsComponent>) { }

  ngOnInit() {
  }

  onClickClose() {
    this.dialogRef.close();
  }

}
