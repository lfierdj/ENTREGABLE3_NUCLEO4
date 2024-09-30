import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { loginGuard, rol2Guard} from './guards/login.guard';
import { Error404Component } from './components/error404/error404.component';
import { GestionlibrosComponent } from './pages/gestionlibros/gestionlibros.component';
import { FormEditarComponent } from './pages/form-editar/form-editar.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'recomendados', component: RecomendacionesComponent,},
  {path: 'editar/:idLibro', component: FormEditarComponent,canActivate:[rol2Guard]},
  {path: 'login', component: LoginComponent},
  {path: 'gestion', component: GestionlibrosComponent,canActivate:[rol2Guard]},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];
