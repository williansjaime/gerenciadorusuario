import { Routes } from '@angular/router';
import { EditarComponent } from './template/Editar/editar/editar.component';
import { AdicionarComponent } from './template/Adicionar/adicionar/adicionar.component';

const routes: Routes = [
    { path: 'adicionar', component: AdicionarComponent },
    { path: 'editar', component: EditarComponent },
   ];

export const appRoutes: Routes = routes;
