import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyJourneyAtWorkComponent } from './my-journey-at-work/my-journey-at-work.component';
import { MaterialCommonModule } from '../material/material.module';
import { RealityChallengeComponent } from './reality-challenge/reality-challenge.component';
import { BlessYourMarketplaceComponent } from './bless-your-marketplace/bless-your-marketplace.component';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialCommonModule],
  declarations: [
    MyJourneyAtWorkComponent,
    RealityChallengeComponent,
    BlessYourMarketplaceComponent,
  ],
  exports: [
    MyJourneyAtWorkComponent,
    RealityChallengeComponent,
    BlessYourMarketplaceComponent,
  ],
})
export class DataFilesModule {}
