import { Component, Input, OnInit } from '@angular/core';
import { Outline } from 'src/app/models/outlines.model';

@Component({
  selector: 'app-outlines-material',
  templateUrl: './outlines-material.component.html',
  styleUrls: ['./outlines-material.component.scss']
})
export class OutlinesMaterialComponent implements OnInit {

  @Input()
  outline: Outline;

  columnDefs = ['Date', 'Topic', 'Description', 'Testimony/Case'];

  rowDefs = [
    {'Date': '6/7', 'Topic' : 'Why work?'},
    {'Date': '6/14', 'Topic' : 'Working with God', 'Testimony/Case' : 'Mia Wang: Why am I doing this?' },
    {'Date': '6/21', 'Topic' : 'Where do I fit in?', 'Description': 'Prayer and Work' },
    {'Date': '6/28', 'Topic' : 'Building partners @ work', 'Description': 'Next steps for your journey' }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
