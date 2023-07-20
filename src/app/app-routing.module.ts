import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './admin/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard" , loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:"admin" , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"masters", loadChildren:()=>import('./masters/masters.module').then(m=>m.MastersModule)},
  {path:"accounting", loadChildren:()=>import('./accounting/accounting.module').then(m=>m.AccountingModule)},
  {path:"voucher", loadChildren:()=>import('./voucher/voucher.module').then(m=>m.VoucherModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
