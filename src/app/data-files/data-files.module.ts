import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyJourneyAtWorkComponent } from './my-journey-at-work/my-journey-at-work.component';
import { MaterialCommonModule } from '../material/material.module';
import { RealityChallengeComponent } from './reality-challenge/reality-challenge.component';
import { BlessYourMarketplaceComponent } from './bless-your-marketplace/bless-your-marketplace.component';
import { PrayOverResumeComponent } from './pray-over-resume/pray-over-resume.component';
import { SurvivingAtWorkComponent } from './surviving-at-work/surviving-at-work.component';
import { MakeYourMoveComponent } from './make-your-move/make-your-move.component';
import { ExcelInServiceComponent } from './excel-in-service/excel-in-service.component';
import { UtilityModule } from '../utility/utility.module';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialCommonModule, UtilityModule],
  declarations: [
    MyJourneyAtWorkComponent,
    RealityChallengeComponent,
    BlessYourMarketplaceComponent,
    PrayOverResumeComponent,
    SurvivingAtWorkComponent,
    MakeYourMoveComponent,
    ExcelInServiceComponent
  ],
  exports: [
    MyJourneyAtWorkComponent,
    RealityChallengeComponent,
    BlessYourMarketplaceComponent,
    PrayOverResumeComponent,
    SurvivingAtWorkComponent,
    MakeYourMoveComponent,
    ExcelInServiceComponent
  ],
})
export class DataFilesModule {}
