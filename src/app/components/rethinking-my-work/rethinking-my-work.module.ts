import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { RethinkingMainComponent } from './rethinking-main/rethinking-main.component';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, UtilityModule, MaterialCommonModule],
  exports: [RethinkingMainComponent],
  declarations: [RethinkingMainComponent],
})
export class RethinkingMyWorkModule {}
