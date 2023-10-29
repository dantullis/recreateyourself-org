/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PhysicalActivityRoutingModule } from './physical-activity-routing.module';
import { PhysicalActivityComponent } from './physical-activity.component';

@NgModule({
  declarations: [PhysicalActivityComponent],
  imports: [CommonModule, PhysicalActivityRoutingModule, FontAwesomeModule],
})
export class PhysicalActivityModule {}
