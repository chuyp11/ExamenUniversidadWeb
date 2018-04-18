import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MateriasService } from '../../../servicios/materias.service';
import { Materia } from '../../../estructuras/materia';

@Component({
  selector: 'app-lectura-materias',
  templateUrl: './lectura-materias.component.html',
  styleUrls: ['./lectura-materias.component.css']
})
export class LecturaMateriasComponent implements OnInit {

  materias: Materia[] = [];
  displayedColumns = [/*'id',*/ 'nombre'];
  dataSource: any;

  constructor(public _data: MateriasService) { }

  ngOnInit() {
    this.lecturaMaterias();
  }

  lecturaMaterias() {
    this._data.getMaterias().subscribe(
      (materias: Materia[]) => {
        this.materias = materias;
        this.dataSource = new MatTableDataSource(this.materias);
        console.log('ngOnInit()', this.materias);
      }
    );
  }
}
