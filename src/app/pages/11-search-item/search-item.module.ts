import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchItemPageRoutingModule } from './search-item-routing.module';

import { SearchItemPage } from './search-item.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchItemPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [SearchItemPage]
})
export class SearchItemPageModule {}
