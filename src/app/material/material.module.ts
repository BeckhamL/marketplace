import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
  ],
  declarations: [],
})
export class MaterialCommonModule {}
