import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule
],
exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule
],
declarations: []
})
export class MaterialCommonModule {}