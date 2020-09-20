import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item-list',
  templateUrl: './category-item-list.component.html',
  styleUrls: ['./category-item-list.component.scss']
})
export class CategoryItemListComponent implements OnInit {

  @Input()
  title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
