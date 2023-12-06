import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { GerenciarusuariosComponent } from './app/template/app.component';

bootstrapApplication(GerenciarusuariosComponent, appConfig)
  .catch((err) => console.error(err));
