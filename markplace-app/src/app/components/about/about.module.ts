import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonComponentModule } from '../common/common.module';
import { UtilityModule } from '../../utility/utility.module';
import { BioDetailsComponent } from './bio-details/bio-details.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, CommonComponentModule, UtilityModule],
  exports: [AboutComponent],
  declarations: [AboutComponent, BioDetailsComponent],
})

export class AboutModule {}
