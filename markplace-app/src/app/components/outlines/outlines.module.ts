import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutlineMainComponent } from './outline-main/outline-main.component';
import { CommonComponentModule } from '../common/common.module';
import { OutlinesMaterialComponent } from './outlines-material/outlines-material.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [CommonModule, CommonComponentModule, FlexLayoutModule],
  exports: [OutlineMainComponent, OutlinesMaterialComponent],
  declarations: [OutlineMainComponent, OutlinesMaterialComponent],
})
export class OutlinesModule {}
