import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityModule } from '../../utility/utility.module';
import { MaterialCommonModule } from '../../material/material.module';
import { CommonComponentModule } from '../common/common.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    UtilityModule,
    MaterialCommonModule,
    CommonComponentModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  exports: [AdminLandingComponent, AdminBlogsComponent],
  declarations: [AdminLandingComponent, AdminBlogsComponent],
})
export class AdminModule {}
