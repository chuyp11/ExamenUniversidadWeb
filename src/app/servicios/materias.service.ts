import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Materia } from '../estructuras/materia';

@Injectable()
export class MateriasService {

  materiasCollection: AngularFirestoreCollection<Materia>;
  materias: Observable<Materia[]>;
  materiaDoc: AngularFirestoreDocument<Materia>;

  constructor(public db: AngularFirestore) {
    this.materiasCollection = this.db.collection('materias', x => x.orderBy('nombre', 'asc'));
    this.materias = this.materiasCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Materia;
            data.id = a.payload.doc.id;
            return data;
          });
      });
    console.log('snapshotChanges()', this.materias);
  }

  getMaterias() {
    return this.materias;
  }
  addUser(materia) {
    this.materiasCollection.add(materia);
  }
  deleteUser(user) {
    this.materiaDoc = this.db.doc(`materias/${user.id}`);
    this.materiaDoc.delete();
  }
}
