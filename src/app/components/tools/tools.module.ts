import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentModule } from '../common/common.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { ToolsMainComponent } from './tools-main/tools-main.component';
@NgModule({
  imports: [CommonModule, CommonComponentModule, FlexLayoutModule, UtilityModule, MaterialCommonModule],
  exports: [ToolsMainComponent],
  declarations: [ ToolsMainComponent],
})
export class ToolsModule {}
