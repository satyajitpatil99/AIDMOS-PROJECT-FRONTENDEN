import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherRoutingModule } from './voucher-routing.module';
import { SalereturnComponent } from './salereturn/salereturn.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SalereturnComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    VoucherRoutingModule,
    SharedModule
  ]
})
export class VoucherModule { }
