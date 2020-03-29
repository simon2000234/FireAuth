import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyPageRoutingModule } from './buy-page-routing.module';
import { BuyPageComponent } from './buy-page.component';


@NgModule({
  declarations: [BuyPageComponent],
  imports: [
    CommonModule,
    BuyPageRoutingModule
  ]
})
export class BuyPageModule { }
