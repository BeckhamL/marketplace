import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCommonModule } from '../app/material/material.module';
import { CommonComponentModule } from './components/common/common.module';
import { HomeCommonModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { WorkshopModule } from './components/workshop/workshop.module';
import { UtilityModule } from './utility/utility.module';
import { OutlinesModule } from './components/outlines/outlines.module';
import { BlogModule } from './components/blogs/blog.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ToolsModule } from '../app/components/tools/tools.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RethinkingMyWorkModule } from './components/rethinking-my-work/rethinking-my-work.module';
import { RecreatinggMyWorkModule } from './components/recreating-my-work/recreating-my-work.module';
import { DataFilesModule } from './data-files/data-files.module';
import { ContactModule } from './components/contact/contact.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminModule } from './components/admin/admin.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialCommonModule,
    CommonComponentModule,
    HomeCommonModule,
    AboutModule,
    AdminModule,
    WorkshopModule,
    UtilityModule,
    FlexLayoutModule,
    OutlinesModule,
    BlogModule,
    HttpClientModule,
    IvyCarouselModule,
    ToolsModule,
    ReactiveFormsModule,
    RethinkingMyWorkModule,
    RecreatinggMyWorkModule,
    DataFilesModule,
    ContactModule,
    FontAwesomeModule,
    MatSnackBarModule,
  ],
  exports: [
    MaterialCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
