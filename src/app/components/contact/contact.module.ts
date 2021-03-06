import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { CommonComponentModule } from '../common/common.module';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    UtilityModule,
    MaterialCommonModule,
    CommonComponentModule,
    ReactiveFormsModule,
  ],
  exports: [ContactComponent],
  declarations: [ContactComponent],
})
export class ContactModule {}
