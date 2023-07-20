import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { SalereturnComponent } from './salereturn/salereturn.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"salereturn",component:SalereturnComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
