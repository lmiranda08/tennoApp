import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleItemPageRoutingModule } from './detalle-item-routing.module';

import { DetalleItemPage } from './detalle-item.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleItemPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [DetalleItemPage]
})
export class DetalleItemPageModule {}
