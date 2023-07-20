import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessesComponent } from '../admin/businesses/businesses.component';

const routes: Routes = [
  {path:"", component:LandingComponent,children:[
    {path:"dashboard", component:DashboardComponent},
    // {path:"businesses", component:BusinessesComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
