import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopMainComponent } from './workshop-main/workshop-main.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WorkshopMainComponent],
    exports: [WorkshopMainComponent]
})
export class WorkshopModule {}