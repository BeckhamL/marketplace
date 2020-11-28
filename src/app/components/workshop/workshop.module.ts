import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopMainComponent } from './workshop-main/workshop-main.component';
import { CommonComponentModule } from '../common/common.module';
import { WorkshopMaterialComponent } from './workshop-material/workshop-material.component';
import { UtilityModule } from '../../utility/utility.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCommonModule } from '../../material/material.module';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonComponentModule,
    UtilityModule,
    MaterialCommonModule
  ],
  declarations: [WorkshopMainComponent, WorkshopMaterialComponent, WorkshopListComponent],
  exports: [WorkshopMainComponent, WorkshopMaterialComponent, WorkshopListComponent],
})
export class WorkshopModule {}
