import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageCardComponent } from './landing-page-card/landing-page-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    imports: [CommonModule, FlexLayoutModule],
    exports: [LandingPageComponent,LandingPageCardComponent],
    declarations: [LandingPageComponent,LandingPageCardComponent],
  })
  export class HomeCommonModule {}
  