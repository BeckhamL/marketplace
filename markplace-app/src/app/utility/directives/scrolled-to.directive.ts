import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[ScrolledTo]',
  exportAs: 'ScrolledTo',
})
export class ScrolledToDirective {
  public passed = false;
  public reached = false;

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    this.reached = this.isElementWithinViewPort();
  }

  isElementWithinViewPort(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
