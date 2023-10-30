import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc } from '@angular/fire/firestore';
import { Project } from '../interfaces/proyectsInterface';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private firestore: Firestore,

  ) { }

  addProjects(project: Project) {
    const projectRef = collection(this.firestore, 'projects');
    return addDoc(projectRef, project);

  }

  getProjects(): Observable<Project[]> {
    const projectsRef = collection(this.firestore, 'projects');
    return collectionData(projectsRef, { idField: 'id' }) as Observable<Project[]>;
  }
  deleteProject(id: string) {
    const projectDocRef = doc(this.firestore, `projects/${id}`);
    return deleteDoc(projectDocRef);

  }
  getProject(id: string) {
    const projectDocRef = doc(this.firestore, `projects/${id}`);

    return getDoc(projectDocRef);
  }
  updateProject(id: string, project: Project) {
    const projectDocRef = doc(this.firestore, `projects/${id}`);
    return projectDocRef;
  }

}
