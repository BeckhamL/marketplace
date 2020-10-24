import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentModule } from '../common/common.module';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { UtilityModule } from '../../utility/utility.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonComponentModule,
    UtilityModule
  ],
  declarations: [BlogMainComponent],
  exports: [BlogMainComponent],
})
export class BlogModule {}
