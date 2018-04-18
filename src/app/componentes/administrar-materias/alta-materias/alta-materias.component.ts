import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../../../servicios/materias.service';
import { Materia } from '../../../estructuras/materia';

export interface Item { id: string; nombre: string; }

@Component({
  selector: 'app-alta-materias',
  templateUrl: './alta-materias.component.html',
  styleUrls: ['./alta-materias.component.css']
})
export class AltaMateriasComponent implements OnInit {

  // materia = { nombre: ''};
  // materia = new Materia('', '');
  // materia: Item;
  materia = {
    id: '',
    nombre: ''
  };

  constructor(public materiasService: MateriasService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.materiasService.addMaterias(this.materia);
    console.log(this.materia);
  }

}
