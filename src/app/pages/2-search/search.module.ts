import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';

import { SearchPageRoutingModule } from './search-routing.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchPageRoutingModule,
    PipesModule
  ],
  declarations: [
    SearchPage,
  ]
})
export class SearchPageModule {}
