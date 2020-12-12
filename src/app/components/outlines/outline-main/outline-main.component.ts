import { Component, OnInit } from '@angular/core';
import { Outline } from 'src/app/models/outlines.model';
import { OutlineService } from 'src/app/services/outline.service';

@Component({
  selector: 'app-outline-main',
  templateUrl: './outline-main.component.html',
  styleUrls: ['./outline-main.component.scss'],
})
export class OutlineMainComponent implements OnInit {

  outlines: any;
  constructor(private outlineService: OutlineService) {}

  ngOnInit() {
    this.outlineService.getAllOutlines().subscribe(outlines => {
      this.outlines = outlines;
    })
  }
}
