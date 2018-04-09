import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// materialAngular componentes
import { MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
  } from '@angular/material';
// materialAngular animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
// import 'web-animations-js';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { LecturaMateriasComponent } from './componentes/administrar-materias/lectura-materias/lectura-materias.component';
import { AltaMateriasComponent } from './componentes/administrar-materias/alta-materias/alta-materias.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    LecturaMateriasComponent,
    AltaMateriasComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
