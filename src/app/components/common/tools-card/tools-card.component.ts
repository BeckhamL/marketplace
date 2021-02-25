import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilePreviewModalComponent } from '../file-preview-modal/file-preview-modal.component';
@Component({
  selector: 'common-tools-card',
  templateUrl: './tools-card.component.html',
  styleUrls: ['./tools-card.component.scss']
})
export class ToolsCardComponent implements OnInit {

  @Input()
  title?:string;

  @Input()
  description?: string;

  @Input()
  file?: string;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onClickFilePreview() {
    const dialogRef = this.dialog.open(FilePreviewModalComponent, {
      data: this.file,
      width: '70vw',
    })
  }

}
