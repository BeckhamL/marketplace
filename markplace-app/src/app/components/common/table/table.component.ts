import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  columnDefs: string[];

  @Input()
  dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

  getCellValue(columnName, element) {
    console.log(columnName, element)
  }

}
