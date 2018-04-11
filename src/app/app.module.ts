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

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
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
