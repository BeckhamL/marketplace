import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrolledToDirective } from './directives/scrolled-to.directive';
import { TooltipInfoPopupDirective } from './directives/tooltip-info.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrolledToDirective, TooltipInfoPopupDirective],
  exports: [ScrolledToDirective, TooltipInfoPopupDirective],
})
export class UtilityModule {}
