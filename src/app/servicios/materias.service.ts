import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Materia } from '../estructuras/materia';

export interface Item { id: string; nombre: string; }

@Injectable()
export class MateriasService {

  materiasCollection: AngularFirestoreCollection<Materia>;
  materias: Observable<Materia[]>;
  materiaDoc: AngularFirestoreDocument<Materia>;

  constructor(public db: AngularFirestore) {
    this.materiasCollection = this.db.collection('materias', x => x.orderBy('nombre', 'asc'));
    // this.materias = this.materiasCollection.snapshotChanges().map(changes => {
    //     return changes.map(a => {
    //         const data = a.payload.doc.data() as Materia;
    //         data.id = a.payload.doc.id;
    //         return data;
    //       });
    //   });
    this.materias = this.materiasCollection.valueChanges();
  }

  getMaterias() {
    return this.materias;
  }

  addMaterias(materia: Item) {
    this.materiasCollection.add(materia);
  }

  // addMaterias(materia: Item) {
  //   const id = this.db.createId();
  //   console.log('antes', materia);
  //   materia.id = id;
  //   console.log('despues', materia);
  //   this.materiasCollection.doc(id).set(materia);
  // }

  // addMaterias(nombre: string) {
  //   const id = this.db.createId();
  //   const item: Item = { id, nombre };
  //   this.materiasCollection.doc(id).set(item);
  // }

  deleteMaterias(user: Materia) {
    this.materiaDoc = this.db.doc(`materias/${user.id}`);
    this.materiaDoc.delete();
  }
}
