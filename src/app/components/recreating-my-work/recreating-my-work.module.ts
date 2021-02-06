import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { RecreatingMainComponent } from './recreating-main/recreating-main.component';
import { CommonComponentModule } from '../common/common.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    UtilityModule,
    MaterialCommonModule,
    CommonComponentModule,
    RouterModule,
  ],
  exports: [RecreatingMainComponent],
  declarations: [RecreatingMainComponent],
})
export class RecreatinggMyWorkModule {}
