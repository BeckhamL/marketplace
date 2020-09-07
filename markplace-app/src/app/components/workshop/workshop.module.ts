import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopMainComponent } from './workshop-main/workshop-main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    imports: [CommonModule, FlexLayoutModule],
    declarations: [WorkshopMainComponent],
    exports: [WorkshopMainComponent]
})
export class WorkshopModule {}