import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { TransactiontypesComponent } from './transactiontypes/transactiontypes.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import { SchedulesComponent } from './schedules/schedules.component';


@NgModule({
  declarations: [
    TransactiontypesComponent,
    LandingComponent,
    GroupsComponent,
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AccountingModule { }
