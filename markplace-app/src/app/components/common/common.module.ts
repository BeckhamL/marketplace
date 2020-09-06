import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialCommonModule } from '../../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialCommonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class CommonComponentModule {}
