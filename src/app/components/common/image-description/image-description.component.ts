import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  title: string;

  @Input()
  description: string;

  @Input()
  route: string;

  @Output() routeChange = new EventEmitter<boolean>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.image) {
      this.image = '/assets/images/' + this.image;
    }
  }

  onClickRoute() {
    this.routeChange.emit(true);
    this.router.navigate([this.route], { relativeTo: this.activatedRoute });
  }

}
