import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about/about.component';
import { WorkshopMainComponent } from './components/workshop/workshop-main/workshop-main.component';
import { OutlineMainComponent } from './components/outlines/outline-main/outline-main.component';
import { BlogMainComponent } from './components/blogs/blog-main/blog-main.component';
import { WorkshopMaterialComponent } from './components/workshop/workshop-material/workshop-material.component';
import { OutlinesMaterialComponent } from './components/outlines/outlines-material/outlines-material.component';
import { BlogMaterialComponent } from './components/blogs/blog-material/blog-material.component';
import { ToolsMainComponent } from './components/tools/tools-main/tools-main.component';
import { RethinkingMainComponent } from './components/rethinking-my-work/rethinking-main/rethinking-main.component';
import { RecreatingMainComponent } from './components/recreating-my-work/recreating-main/recreating-main.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { BlessYourMarketplaceComponent } from './data-files/bless-your-marketplace/bless-your-marketplace.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mission-@-work', component: RethinkingMainComponent },
  {
    path: 'ministry-@-work',
    component: RecreatingMainComponent,
    children: [
      {
        path: 'bless-your-marketplace',
        component: BlessYourMarketplaceComponent,
      },
    ],
  },
  // {
  //   path: 'bless-your-marketplace',
  //   component: BlessYourMarketplaceComponent,
  // },
  { path: 'workshops', component: WorkshopMainComponent },
  { path: 'workshop/:id', component: WorkshopMaterialComponent },
  { path: 'outlines', component: OutlineMainComponent },
  { path: 'outline/:id', component: OutlinesMaterialComponent },
  { path: 'blogs', component: BlogMainComponent },
  { path: 'blog/:id', component: BlogMaterialComponent },
  { path: 'toolbox', component: ToolsMainComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
