import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleArcanePageRoutingModule } from './detalle-arcane-routing.module';

import { DetalleArcanePage } from './detalle-arcane.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetalleArcanePageRoutingModule,
    PipesModule
  ],
  declarations: [DetalleArcanePage]
})
export class DetalleArcanePageModule {}
