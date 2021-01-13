import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyJourneyAtWorkComponent } from './my-journey-at-work/my-journey-at-work.component';
import { MaterialCommonModule } from '../material/material.module';
import { RealityChallengeComponent } from './reality-challenge/reality-challenge.component';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialCommonModule],
  declarations: [MyJourneyAtWorkComponent, RealityChallengeComponent],
  exports: [MyJourneyAtWorkComponent, RealityChallengeComponent],
})
export class DataFilesModule {}
