import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialCommonModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [CommonModule, MaterialCommonModule, FlexLayoutModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class CommonComponentModule {}
