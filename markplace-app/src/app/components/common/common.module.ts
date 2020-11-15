import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialCommonModule } from '../../material/material.module';
import { ScrollContentTrackerComponent } from './scroll-content-tracker/scroll-content-tracker.component';
import { CategoryItemListComponent } from './category-item-list/category-item-list.component';
import { TableComponent } from './table/table.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { ButtonComponent } from './button/button.component';
import { ImageDescriptionComponent } from './image-description/image-description.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverviewCardLargeComponent } from './overview-card-large/overview-card-large.component';
@NgModule({
  imports: [CommonModule, MaterialCommonModule, FlexLayoutModule],
  exports: [
    HeaderComponent,
    ScrollContentTrackerComponent,
    CategoryItemListComponent,
    TableComponent,
    BlogCardComponent,
    EmailInputComponent,
    IconButtonComponent,
    OverviewCardComponent,
    FlipCardComponent,
    ButtonComponent,
    ImageDescriptionComponent,
    FooterComponent,
    OverviewCardLargeComponent
  ],
  declarations: [
    HeaderComponent,
    ScrollContentTrackerComponent,
    CategoryItemListComponent,
    TableComponent,
    BlogCardComponent,
    EmailInputComponent,
    IconButtonComponent,
    OverviewCardComponent,
    FlipCardComponent,
    ButtonComponent,
    ImageDescriptionComponent,
    FooterComponent,
    OverviewCardLargeComponent
  ],
})
export class CommonComponentModule {}
