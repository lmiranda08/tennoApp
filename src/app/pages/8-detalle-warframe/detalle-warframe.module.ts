import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleWarframePageRoutingModule } from './detalle-warframe-routing.module';

import { DetalleWarframePage } from './detalle-warframe.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetalleWarframePageRoutingModule,
    PipesModule,
  ],
  declarations: [DetalleWarframePage]
})
export class DetalleWarframePageModule {}
