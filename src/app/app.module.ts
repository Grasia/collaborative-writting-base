import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ParticiparComponent } from './participar/participar.component';
import { CdkTableModule } from '@angular/cdk/table';
import { LoginInputComponent} from './login-input/login-input.component';
import { RegistroComponent} from './registro/registro.component';
import { UserService } from './user.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DocService } from './doc.service';
import { SwellService } from './swell.service';
import { DocumentoComponent } from './documento/documento.component';
import { RevisionComponent } from './revision/revision.component';
import { RedaccionComponent } from './redaccion/redaccion.component';
import { LlamadaComponent } from './llamada/llamada.component';
import { FinalComponent } from './final/final.component';
import { CambiosComponent } from './cambios/cambios.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { TextoComponent } from './texto/texto.component';
import { OpinarComponent } from './opinar/opinar.component';
import { RedactarComponent } from './redactar/redactar.component';
import { TextoAnalisisComponent } from './texto-analisis/texto-analisis.component';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';





@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],

  
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ParticiparComponent,
    LoginInputComponent,
    RegistroComponent,
    UsuarioComponent,
    AdminComponent,
    ToggleComponent,
    DocumentoComponent,
    RevisionComponent,
    RedaccionComponent,
    LlamadaComponent,
    FinalComponent,
    CambiosComponent,
    AnalisisComponent,
    NuevoComponent,
    TextoComponent,
    OpinarComponent,
    RedactarComponent,
    TextoAnalisisComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, DocService, SwellService],
  bootstrap: [AppComponent],

})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);