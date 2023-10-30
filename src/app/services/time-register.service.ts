import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { TimeRegister } from '../interfaces/proyectsInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeRegisterService {

  constructor(
    private firestore : Firestore
  ) { }

  addTimeRegister(timeRegister: TimeRegister) {
    const timeRegisterRef = collection(this.firestore, 'timeRegister');
    return addDoc(timeRegisterRef, timeRegister)
  }
  getTimeRegister():Observable<TimeRegister[]>{
    const timeRegisterRef = collection(this.firestore, 'timeRegister');
    return collectionData(timeRegisterRef, {idField: 'id'}) as Observable<TimeRegister[]>;
  }

  deleteTimeRegister(id: string){
    const timeRegisterDocRef = doc(this.firestore, `timeRegister/${id}`);
    return deleteDoc(timeRegisterDocRef);
  }
  updateTimeRegister(id: string, timeRegister: TimeRegister){
    const timeRegisterDocRef = doc(this.firestore, `timeRegister/${id}`);
    return updateDoc(timeRegisterDocRef, {timeRegister});
  }


}
