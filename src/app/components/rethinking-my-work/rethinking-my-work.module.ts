import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { RethinkingMainComponent } from './rethinking-main/rethinking-main.component';
import { CommonComponentModule } from '../common/common.module';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, UtilityModule, MaterialCommonModule, CommonComponentModule],
  exports: [RethinkingMainComponent],
  declarations: [RethinkingMainComponent],
})
export class RethinkingMyWorkModule {}
