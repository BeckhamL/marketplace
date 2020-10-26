import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-image-description',
  templateUrl: './image-description.component.html',
  styleUrls: ['./image-description.component.scss']
})
export class ImageDescriptionComponent implements OnInit {

  @Input()
  image: string;

  @Input()
  author: string;

  @Input()
  description: string;

  constructor() { }

  ngOnInit() {
  }

}
