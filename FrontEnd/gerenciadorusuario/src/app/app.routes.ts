import { Routes } from '@angular/router';
import { EditarComponent } from './template/Editar/editar/editar.component';
import { CadastraComponent } from './template/Cadastra/cadastra/cadastra.component';

const routes: Routes = [
    { path: 'cadastra', component: CadastraComponent },
    { path: 'editar', component: EditarComponent },
   ];

export const appRoutes: Routes = routes;
