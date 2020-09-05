import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
imports: [
    CommonModule,
    MatSliderModule
],
exports: [
    MatSliderModule
],
declarations: []
})
export class MaterialCommonModule {}