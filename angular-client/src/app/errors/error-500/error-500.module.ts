import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error500Component } from './error-500.component';

@NgModule({
  declarations: [Error500Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Error500Component }]),
  ],
})
export class Error500Module {}
