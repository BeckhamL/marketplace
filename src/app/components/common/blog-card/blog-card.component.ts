import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  buttonTitle: string;

  @Output() emitButton = new EventEmitter<() => {}>();

  constructor() { }

  ngOnInit() {
  }

  onEmit() {
    this.emitButton.emit();
  }

}
