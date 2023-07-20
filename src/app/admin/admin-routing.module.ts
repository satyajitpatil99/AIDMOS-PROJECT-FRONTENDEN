import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { UsersComponent } from './users/users.component';
import { MenusComponent } from './menus/menus.component';
import { ModulemenumappingComponent } from './modulemenumapping/modulemenumapping.component';
import { UsermodulemappingComponent } from './usermodulemapping/usermodulemapping.component';
import { ModulesComponent } from './modules/modules.component';
import { FinancialyearsComponent } from './financialyears/financialyears.component';
import { SettingsComponent } from './settings/settings.component';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';
import { TalukasComponent } from './talukas/talukas.component';
import { VillagesComponent } from './villages/villages.component';
import { AreasComponent } from './areas/areas.component';
import { SalereturnComponent } from '../voucher/salereturn/salereturn.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"businesses", component:BusinessesComponent},
    {path:"financialyears", component:FinancialyearsComponent},
    {path:"users/:businessid", component:UsersComponent},
    {path:"menus", component:MenusComponent},
    {path:"modules", component:ModulesComponent},
    {path:"modulemenumapping", component:ModulemenumappingComponent},
    {path:"usermodulemapping", component:UsermodulemappingComponent},
    {path:"settings", component:SettingsComponent},
    {path:"states",component:StatesComponent},
    {path:"districts/:stateid",component:DistrictsComponent},
    {path:"talukas/:districtid",component:TalukasComponent},
    {path:"villages/:talukaid",component:VillagesComponent},
    {path:"areas/:villageid",component:AreasComponent},
    {path:"salereturn",component:SalereturnComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
