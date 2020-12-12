import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Outline } from 'src/app/models/outlines.model';
import { OutlineService } from 'src/app/services/outline.service';

@Component({
  selector: 'app-outlines-material',
  templateUrl: './outlines-material.component.html',
  styleUrls: ['./outlines-material.component.scss']
})
export class OutlinesMaterialComponent implements OnInit, OnDestroy {

  outline: any;
  isLoaded = false;
  routeSub: Subscription;

  columnDefs = ['Date', 'Topic', 'Description', 'Testimony/Case'];

  rowDefs = [
    {'Date': '6/7', 'Topic' : 'Why work?'},
    {'Date': '6/14', 'Topic' : 'Working with God', 'Testimony/Case' : 'Mia Wang: Why am I doing this?' },
    {'Date': '6/21', 'Topic' : 'Where do I fit in?', 'Description': 'Prayer and Work' },
    {'Date': '6/28', 'Topic' : 'Building partners @ work', 'Description': 'Next steps for your journey' }
  ]
  
  constructor(private outlineService: OutlineService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.getOutlineData(params['id']);
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getOutlineData(id: number) {
    this.outlineService.getOneOutline(id).subscribe(outline => {
      this.outline = outline;

      if (this.outline) {
        this.isLoaded = true;
      }
    })
  }
}
