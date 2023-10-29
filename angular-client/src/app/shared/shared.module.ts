/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { NgApexchartsModule } from 'ng-apexcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// layout
import { NavbarComponent } from './navbar/navbar.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
//import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//import { AppCheckboxesComponent } from './checkboxes/checkboxes.component';

// import { FeaturesComponent } from './features/features.component';
// import { PricingComponent } from './pricing/pricing.component';
// import { ServicesComponent } from './services/services.component';

// import { ApexChartBarComponent } from './charts/apex/apex-chart-bar/apex-chart-bar.component';
// import { ApexChartNpComponent } from './charts/apex/apex-chart-np/apex-chart-np.component';
// import { ApexChartRevComponent } from './charts/apex/apex-chart-rev/apex-chart-rev.component';
// import { ApexChartFcfComponent } from './charts/apex/apex-chart-fcf/apex-chart-fcf.component';
// import { ApexChartDonutComponent } from './charts/apex/apex-chart-donut/apex-chart-donut.component';

// import { EditorComponent } from './editor/editor.component';

// import { GroupByPipe } from './group.pipe';
// import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

/**
The "SharedModule" should have the components, directives, and pipes that you use everywhere in your app.

This module should consist entirely of declarations, most of them exported.

The SharedModule may re-export other widget modules, such as CommonModule, FormsModule,
and modules with the UI controls that you use most widely.

The SharedModule should not have providers.
Nor should any of its imported or re-exported modules have providers.
If you deviate from this guideline, know what you're doing and why.
Import the SharedModule in your feature modules, both those loaded when the app starts and
those you lazy load later.
 */
@NgModule({
  declarations: [
    NavbarComponent,
    //SidebarComponent,
    //HeaderComponent,
    FooterComponent,
    // AppCheckboxesComponent,
    // FeaturesComponent,
    // PricingComponent,
    // ServicesComponent,
    // ApexChartBarComponent,
    // ApexChartNpComponent,
    // ApexChartRevComponent,
    // ApexChartFcfComponent,
    // ApexChartDonutComponent,
    // EditorComponent,
    // GroupByPipe,
    // ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // FeatherModule.pick(icons),
    //NgApexchartsModule,
    FontAwesomeModule,
  ],
  exports: [
    // FeatherModule,
    //NgApexchartsModule,
    FontAwesomeModule,
    FormsModule,
    NavbarComponent,
    //SidebarComponent,
    //HeaderComponent,
    FooterComponent,
    // AppCheckboxesComponent,
    // FeaturesComponent,
    // PricingComponent,
    // ServicesComponent,
    // ApexChartBarComponent,
    // ApexChartNpComponent,
    // ApexChartRevComponent,
    // ApexChartFcfComponent,
    // ApexChartDonutComponent,
    // EditorComponent,
    // GroupByPipe,
    // ConfirmationModalComponent
  ],
})
export class SharedModule {}
