import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { subTask } from '../interfaces/proyectsInterface';

@Injectable({
  providedIn: 'root'
})
export class SubTasksService {

  constructor(private firestore:Firestore) { }

  addSubTask(subTask:subTask){
    const subTaskRef = collection(this.firestore, 'subTasks');
    return addDoc(subTaskRef, subTask);
  }
  getSubTasks():Observable<subTask []>{
    const subTaskRef = collection(this.firestore, 'subTasks');
    return collectionData(subTaskRef, {idField: 'id'}) as Observable<subTask[]>;
  }
  deleteSubTask(id: string){
    const subTaskDocRef = doc(this.firestore, `subTasks/${id}`);
    return deleteDoc(subTaskDocRef);
  }
  getSubTask(id: string){
    const subTaskDocRef = doc(this.firestore, `subTasks/${id}`);
    return getDoc(subTaskDocRef);
  }
  updateSubtask(id: string, subTask: subTask){
    const subTaskDocRef = doc(this.firestore, `subTasks/${id}`);
    return updateDoc(subTaskDocRef, {subTask});
  }
}
