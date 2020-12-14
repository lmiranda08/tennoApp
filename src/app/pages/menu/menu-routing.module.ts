import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../6-home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../1-add/add.module').then( m => m.AddPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../2-search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'search-weapon',
        loadChildren: () => import('../4-search-weapon/search-weapon.module').then( m => m.SearchWeaponPageModule)
      },
      {
        path: 'search-weapon/:index',
        loadChildren: () => import('../3-detalle-weapon/detalle-weapon.module').then( m => m.DetalleWeaponPageModule)
      },
      {
        path: 'resources',
        loadChildren: () => import('../5-resources/resources.module').then( m => m.ResourcesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'search-warframe',
        loadChildren: () => import('../7-search-warframe/search-warframe.module').then( m => m.SearchWarframePageModule)
      },
      {
        path: 'search-warframe/:index',
        loadChildren: () => import('../8-detalle-warframe/detalle-warframe.module').then( m => m.DetalleWarframePageModule)
      },
      {
        path: 'search-arcane',
        loadChildren: () => import('../9-search-arcane/search-arcane.module').then( m => m.SearchArcanePageModule)
      },
      {
        path: 'search-arcane/:index',
        loadChildren: () => import('../10-detalle-arcane/detalle-arcane.module').then( m => m.DetalleArcanePageModule)
      },
      {
        path: 'search-item',
        loadChildren: () => import('../11-search-item/search-item.module').then( m => m.SearchItemPageModule)
      },
      {
        path: 'search-item/:index',
        loadChildren: () => import('../12-detalle-item/detalle-item.module').then( m => m.DetalleItemPageModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('../13-sales/sales.module').then( m => m.SalesPageModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('../14-modal/modal.module').then( m => m.ModalPageModule)
      },
      {
        path: 'baro',
        loadChildren: () => import('../15-baro/baro.module').then( m => m.BaroPageModule)
      },
      {
        path: 'extras',
        loadChildren: () => import('../16-extras/extras.module').then( m => m.ExtrasPageModule)
      },
      {
        path: 'search-add-arcane',
        loadChildren: () => import('../2-1-search-add-arcane/search-add-arcane.module').then( m => m.SearchAddArcanePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
