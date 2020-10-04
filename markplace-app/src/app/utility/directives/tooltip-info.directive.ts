import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import tippy from 'tippy.js';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[tooltipInfoPopup]',
})
export class TooltipInfoPopupDirective implements OnInit {
  element: HTMLElement;
  toolTippy: any;

  @Input()
  tooltipText: string;

  // Possible themes are:
  // - toolTipRed
  // - toolTipOrange
  // - toolTipBeige
  // - toolTipWhite
  @Input()
  tooltipTheme: string;

  @Input()
  tooltipInteractive: boolean;

  // Boolean condition to allow HTML template
  // Allows user to generate more specifc tippy content rather than string
  // **MUST INPUT tooltipTemplateID**
  @Input()
  tooltipUseHTML: boolean;

  @Input()
  tooltipTemplateID: string;

  @Input()
  tooltipOffsetX: string;

  @Input()
  tooltipOffsetY: string;

  @HostListener('mouseenter')
  mouseenter() {
    // this.toolTippy = tippy(this.element, {
    //   content: this.tooltipUseHTML
    //     ? this.getTemplateID(this.tooltipTemplateID)
    //     : this.tooltipText,
    //   theme: this.tooltipTheme ? this.tooltipTheme : '',
    //   boundary: 'window',
    //   maxWidth: 'none',
    //   allowHTML: true,
    //   interactive: this.tooltipInteractive ? this.tooltipInteractive : false,
    //   offset: ` ${this.tooltipOffsetX ? this.tooltipOffsetX : 0}, ${
    //     this.tooltipOffsetY ? this.tooltipOffsetY : 0
    //   }`,
    // });
    console.log('here')
    this.toolTippy = tippy(this.element, {
        content: this.tooltipUseHTML ? this.getTemplateID(this.tooltipTemplateID) : this.tooltipText
    })

    if (this.toolTippy) {
      this.toolTippy?.show();
    }
  }

  constructor(private elementRef: ElementRef) {
    this.element = elementRef?.nativeElement;
  }

  ngOnInit() {}

  getTemplateID(ID: string): string {
    const template = document?.getElementById(ID);

    return template?.innerHTML;
  }
}
