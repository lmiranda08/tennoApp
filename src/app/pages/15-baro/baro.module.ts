import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaroPageRoutingModule } from './baro-routing.module';

import { BaroPage } from './baro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaroPageRoutingModule
  ],
  declarations: [BaroPage]
})
export class BaroPageModule {}
