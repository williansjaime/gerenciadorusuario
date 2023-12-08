import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { appRoutes } from './app.routes'; // Import the exported appRoutes variable

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideClientHydration()]
};


