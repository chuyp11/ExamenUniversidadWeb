import { Component, OnInit } from '@angular/core';
import { Materia } from '../../../estructuras/materia';

@Component({
  selector: 'app-alta-materias',
  templateUrl: './alta-materias.component.html',
  styleUrls: ['./alta-materias.component.css']
})
export class AltaMateriasComponent implements OnInit {

  // materia: Materia;
  materia = new Materia('', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.materia);
  }

}
