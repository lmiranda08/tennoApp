import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAddArcanePageRoutingModule } from './search-add-arcane-routing.module';

import { SearchAddArcanePage } from './search-add-arcane.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchAddArcanePageRoutingModule,
    PipesModule
  ],
  declarations: [SearchAddArcanePage]
})
export class SearchAddArcanePageModule {}
