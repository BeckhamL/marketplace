import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component'; 
import { AboutComponent } from './components/about/about/about.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
