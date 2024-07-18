import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';


import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),importProvidersFrom(HttpClientModule)]
  
};
