import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule {}
