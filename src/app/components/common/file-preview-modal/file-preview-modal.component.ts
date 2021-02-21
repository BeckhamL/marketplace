import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'common-file-preview-modal',
  templateUrl: './file-preview-modal.component.html',
  styleUrls: ['./file-preview-modal.component.scss'],
})
export class FilePreviewModalComponent implements OnInit {

  file: SafeResourceUrl;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private sanitizer:DomSanitizer) {}

  ngOnInit() {
    if (this.data) {
      this.file = this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/files/' + this.data);
    }
    
  }
}
