import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrolledToDirective } from './directives/scrolled-to.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrolledToDirective],
  exports: [ScrolledToDirective],
})
export class UtilityModule {}
