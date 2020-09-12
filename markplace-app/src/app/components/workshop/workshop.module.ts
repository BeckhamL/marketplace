import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopMainComponent } from './workshop-main/workshop-main.component';
import { CommonComponentModule } from '../common/common.module';
import { WorkshopMaterialComponent } from './workshop-material/workshop-material.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    imports: [CommonModule, FlexLayoutModule, CommonComponentModule],
    declarations: [WorkshopMainComponent, WorkshopMaterialComponent],
    exports: [WorkshopMainComponent, WorkshopMaterialComponent]
})
export class WorkshopModule {}