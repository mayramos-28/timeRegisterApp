import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, query, updateDoc, where } from '@angular/fire/firestore';
import { Task } from '../interfaces/proyectsInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private firestore: Firestore
  ) { }

  addTask(task: Task) {
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }
  getTasks(projectId:string): Observable<Task[]> {
    const taskRef = collection(this.firestore, 'tasks');
    const taskQuery = query(taskRef, where('projectId', '==', projectId));
    return collectionData(taskQuery, { idField: 'id' }) as Observable<Task[]>;
  }
  deleteTask(id: string) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskDocRef);
  }
  getTask(id: string) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return getDoc(taskDocRef);
  }
  updateTask(id: string, task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskDocRef, { task });
  }
}
