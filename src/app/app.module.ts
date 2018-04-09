import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// materialAngular componentes
import { MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule
  } from '@angular/material';
// materialAngular animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
// import 'web-animations-js';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
