import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchWeaponPageRoutingModule } from './search-weapon-routing.module';

import { SearchWeaponPage } from './search-weapon.page';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchWeaponPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    SearchWeaponPage
  ]
})
export class SearchWeaponPageModule {}
