import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentModule } from '../common/common.module';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogMaterialComponent } from './blog-material/blog-material.component';
import { UtilityModule } from '../../utility/utility.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonComponentModule,
    UtilityModule,
  ],
  declarations: [BlogMainComponent, BlogMaterialComponent],
  exports: [BlogMainComponent, BlogMaterialComponent],
})
export class BlogModule {}
