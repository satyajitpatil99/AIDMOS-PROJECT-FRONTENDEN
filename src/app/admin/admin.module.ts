import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { UsertypesComponent } from './usertypes/usertypes.component';
import { UsersComponent } from './users/users.component';
import { MenusComponent } from './menus/menus.component';
import { ModulesComponent } from './modules/modules.component';
import { ModulemenusComponent } from './modulemenus/modulemenus.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { UsermodulemappingComponent } from './usermodulemapping/usermodulemapping.component';
import { ModulemenumappingComponent } from './modulemenumapping/modulemenumapping.component';
import { FinancialyearsComponent } from './financialyears/financialyears.component';
import { SettingsComponent } from './settings/settings.component';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';
import { TalukasComponent } from './talukas/talukas.component';
import { VillagesComponent } from './villages/villages.component';
import { AreasComponent } from './areas/areas.component';


@NgModule({
  declarations: [
    LandingComponent,
    UsertypesComponent,
    UsersComponent,
    MenusComponent,
    ModulesComponent,
    ModulemenusComponent,
    BusinessesComponent,
    ModulemenumappingComponent,
    UsermodulemappingComponent,
    FinancialyearsComponent,
    SettingsComponent,
    StatesComponent,
    DistrictsComponent,
    TalukasComponent,
    VillagesComponent,
    AreasComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AdminModule { }
