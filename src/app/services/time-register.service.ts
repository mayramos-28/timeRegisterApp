import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { TimeRegister } from '../interfaces/proyectsInterface';
import { Observable } from 'rxjs';
import { query, where } from 'firebase/firestore';

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
  getTimesRegisters(parentId:string):Observable<TimeRegister[]>{

    const timeRegisterRef = collection(this.firestore, 'timeRegister');
    const queryTimeRegister = query(timeRegisterRef,where('parentId', '==', parentId));
    return collectionData(queryTimeRegister, {idField: 'id'}) as Observable<TimeRegister[]>;
  }
  getTimeRegister(id: string){
    const timeRegisterDocRef = doc(this.firestore, `timeRegister/${id}`);
    return getDoc(timeRegisterDocRef);
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
