import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { LandingComponent } from './landing.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"companies", component:CompaniesComponent},
    {path:"units", component:UnitsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
