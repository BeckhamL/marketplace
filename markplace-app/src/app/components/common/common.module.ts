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
import { FlexLayoutModule } from '@angular/flex-layout';
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
    OverviewCardComponent
  ],
  declarations: [
    HeaderComponent,
    ScrollContentTrackerComponent,
    CategoryItemListComponent,
    TableComponent,
    BlogCardComponent,
    EmailInputComponent,
    IconButtonComponent,
    OverviewCardComponent
  ],
})
export class CommonComponentModule {}
