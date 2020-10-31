import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonComponentModule } from '../common/common.module';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, CommonComponentModule],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule {}
