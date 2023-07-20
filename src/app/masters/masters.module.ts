import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { LandingComponent } from './landing.component';
import { CompaniesComponent } from './companies/companies.component';
import { UnitsComponent } from './units/units.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingComponent,
    CompaniesComponent,
    UnitsComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MastersModule { }
