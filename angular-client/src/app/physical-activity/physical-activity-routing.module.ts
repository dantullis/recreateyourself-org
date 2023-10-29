/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysicalActivityComponent } from './physical-activity.component';

const routes: Routes = [{ path: '', component: PhysicalActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalActivityRoutingModule {}
