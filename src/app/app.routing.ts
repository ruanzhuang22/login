import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "home",loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: "",loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
      },
    ]
  }
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy',
  scrollPositionRestoration: 'enabled',
});