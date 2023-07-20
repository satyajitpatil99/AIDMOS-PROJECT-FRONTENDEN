import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { TransactiontypesComponent } from './transactiontypes/transactiontypes.component';
import { GroupsComponent } from './groups/groups.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"transactiontypes",component:TransactiontypesComponent},
    {path:"groups",component:GroupsComponent},
    {path:"schedules",component:SchedulesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
