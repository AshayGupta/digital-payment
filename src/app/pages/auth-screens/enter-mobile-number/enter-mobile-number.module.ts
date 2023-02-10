import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterMobileNumberPageRoutingModule } from './enter-mobile-number-routing.module';

import { EnterMobileNumberPage } from './enter-mobile-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterMobileNumberPageRoutingModule
  ],
  declarations: [EnterMobileNumberPage]
})
export class EnterMobileNumberPageModule {}
