import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchWarframePage } from './search-warframe.page';

const routes: Routes = [
  {
    path: '',
    component: SearchWarframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchWarframePageRoutingModule {}
