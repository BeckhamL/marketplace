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
import { ShareableSocialsComponent } from './shareable-socials/shareable-socials.component';
import { SolidInfoCardComponent } from './solid-info-card/solid-info-card.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { TextImageCarouselComponent } from './text-image-carousel/text-image-carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { SignupComponent } from './signup/signup.component';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFilesModule } from 'src/app/data-files/data-files.module';
import { CircleIconComponent } from './circle-icon/circle-icon.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MiddleSeperatorComponent } from './middle-seperator/middle-seperator.component';
import { ToolsCardComponent } from './tools-card/tools-card.component';
@NgModule({
  imports: [CommonModule, MaterialCommonModule, FlexLayoutModule, IvyCarouselModule, ReactiveFormsModule, DataFilesModule],
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
    OverviewCardLargeComponent,
    ShareableSocialsComponent,
    SolidInfoCardComponent,
    ImageGridComponent,
    TextImageCarouselComponent,
    BlogCarouselComponent,
    ImageCarouselComponent,
    SignupComponent,
    StepperComponent,
    CircleIconComponent,
    SideMenuComponent,
    MiddleSeperatorComponent,
    ToolsCardComponent
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
    OverviewCardLargeComponent,
    ShareableSocialsComponent,
    SolidInfoCardComponent,
    ImageGridComponent,
    TextImageCarouselComponent,
    BlogCarouselComponent,
    ImageCarouselComponent,
    SignupComponent,
    StepperComponent,
    CircleIconComponent,
    SideMenuComponent,
    MiddleSeperatorComponent,
    ToolsCardComponent
  ],
})
export class CommonComponentModule {}
