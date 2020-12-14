import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaroPage } from './baro.page';

const routes: Routes = [
  {
    path: '',
    component: BaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaroPageRoutingModule {}
