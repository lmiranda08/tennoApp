import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'add',
        loadChildren: () => import('../1-add/add.module').then(m => m.AddPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../2-search/search.module').then(m => m.SearchPageModule)
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
        path: 'home',
        loadChildren: () => import('../6-home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
