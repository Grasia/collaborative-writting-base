import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ParticiparComponent } from './participar/participar.component';
import { DocumentoComponent } from './documento/documento.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RevisionComponent} from './revision/revision.component';
import { LlamadaComponent} from './llamada/llamada.component';
import { AnalisisComponent} from './analisis/analisis.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent},
    { path: 'participar', component: ParticiparComponent},
    { path: 'documento', component: DocumentoComponent},
    { path: 'nuevo', component: NuevoComponent},
    { path: 'texto', component: RevisionComponent},
    { path: 'analisis', component: AnalisisComponent},
    { path: 'llamada', component: LlamadaComponent},
    { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
