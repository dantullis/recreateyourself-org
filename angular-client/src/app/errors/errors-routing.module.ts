import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'error-404' },
      {
        path: 'error-403',
        loadChildren: () =>
          import('./error-403/error-403.module').then(m => m.Error403Module),
      },
      {
        path: 'error-404',
        loadChildren: () =>
          import('./error-404/error-404.module').then(m => m.Error404Module),
      },
      {
        path: 'error-500',
        loadChildren: () =>
          import('./error-500/error-500.module').then(m => m.Error500Module),
      },
    ]),
  ],
})
export class ErrorsRoutingModule {}
