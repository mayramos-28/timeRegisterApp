import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { Project } from '../interfaces/proyectsInterface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private firestore : Firestore
  ) { }

  getProjects(project:Project){
    const projectRef = collection(this.firestore, 'projects');
    return addDoc(projectRef, project);
   // return this.firestore.collection('projects').snapshotChanges();
  }
}
