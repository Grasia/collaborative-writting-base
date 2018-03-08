import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ParticiparComponent } from './participar/participar.component';
import { DocumentoComponent } from './documento/documento.component';
import { NuevoComponent } from './nuevo/nuevo.component';
  
const routes: Routes = [
    
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent},
    { path: 'participar', component: ParticiparComponent},
    { path: 'documento/:id', component: DocumentoComponent},
    { path: 'nuevo', component: NuevoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
