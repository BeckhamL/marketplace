import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { CommonComponentModule } from '../common/common.module';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, UtilityModule, MaterialCommonModule, CommonComponentModule],
  exports: [ContactComponent],
  declarations: [ContactComponent],
})
export class ContactModule {}
