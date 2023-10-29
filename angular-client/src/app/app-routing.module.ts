/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'physical-activity',
    loadChildren: () =>
      import('./physical-activity/physical-activity.module').then(
        m => m.PhysicalActivityModule
      ),
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./errors/errors-routing.module').then(m => m.ErrorsRoutingModule),
  },
  { path: '**', redirectTo: 'errors' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
