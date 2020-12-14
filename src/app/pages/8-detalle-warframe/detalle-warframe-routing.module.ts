import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleWarframePage } from './detalle-warframe.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleWarframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleWarframePageRoutingModule {}
