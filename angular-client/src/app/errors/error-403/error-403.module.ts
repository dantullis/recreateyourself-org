import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error403Component } from './error-403.component';

@NgModule({
  declarations: [Error403Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Error403Component }]),
  ],
})
export class Error403Module {}
