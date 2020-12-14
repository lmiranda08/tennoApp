import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchArcanePageRoutingModule } from './search-arcane-routing.module';

import { SearchArcanePage } from './search-arcane.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchArcanePageRoutingModule,
    PipesModule
  ],
  declarations: [SearchArcanePage]
})
export class SearchArcanePageModule {}
