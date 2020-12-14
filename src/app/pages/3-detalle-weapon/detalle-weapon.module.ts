import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleWeaponPage } from './detalle-weapon.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DetalleWeaponPageRoutingModule } from './detalle-weapon-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DetalleWeaponPage }]),
    DetalleWeaponPageRoutingModule,
    PipesModule,
    ReactiveFormsModule
  ],
  declarations: [
    DetalleWeaponPage
  ]
})
export class DetalleWeaponPageModule {}
