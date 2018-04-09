import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() abrirMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickMenu() {
    this.abrirMenu.emit();
  }

}
