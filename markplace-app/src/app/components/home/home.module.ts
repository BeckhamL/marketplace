import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageCardComponent } from './landing-page-card/landing-page-card.component';
@NgModule({
    imports: [CommonModule],
    exports: [LandingPageComponent,LandingPageCardComponent],
    declarations: [LandingPageComponent,LandingPageCardComponent],
  })
  export class HomeCommonModule {}
  