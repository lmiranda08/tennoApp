import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchArcanePage } from './search-arcane.page';

const routes: Routes = [
  {
    path: '',
    component: SearchArcanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchArcanePageRoutingModule {}
