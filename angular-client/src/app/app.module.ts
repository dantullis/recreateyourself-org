/* eslint-disable @typescript-eslint/no-unused-vars */
// Angular core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 3rd party imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// This app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorsRoutingModule } from './errors/errors-routing.module';

import { errorInterceptorProviders } from '@app/_interceptors';

import { JsonLdModule } from './services/json-ld';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsRoutingModule,
    FontAwesomeModule,
    SharedModule,
    JsonLdModule,
  ],
  providers: [errorInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
