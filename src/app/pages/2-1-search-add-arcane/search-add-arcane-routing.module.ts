import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAddArcanePage } from './search-add-arcane.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAddArcanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAddArcanePageRoutingModule {}
