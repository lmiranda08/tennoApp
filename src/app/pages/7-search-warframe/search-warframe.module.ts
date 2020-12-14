import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchWarframePageRoutingModule } from './search-warframe-routing.module';

import { SearchWarframePage } from './search-warframe.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchWarframePageRoutingModule,
    PipesModule
  ],
  declarations: [SearchWarframePage]
})
export class SearchWarframePageModule {}
