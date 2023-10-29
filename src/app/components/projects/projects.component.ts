import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/proyectsInterface';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements  OnInit{
  userId: Observable<any> | undefined;
  projects : Project[] | undefined 
    // { id: '12345', name: 'trabajo 1', description: 'trabajo para comer 1', date: '28/10/2023', image: 'https://picsum.photos/400/300' },
    // { id: '12346', name: 'trabajo 23', description: 'trabajo para comer 2', date: '29/10/2023', image: 'https://picsum.photos/400/300'},
    // { id: '12347', name: 'trabajo 3', description: 'trabajo para comer 3', date: '30/10/2023', image: 'https://picsum.photos/400/300' },
    

  constructor(
    private _formBuilder: FormBuilder,
    private _projectService: ProjectsService,
    private userService : UserService
  ) { } 
  
  ngOnInit(): void {
    this._projectService.getProjects().subscribe(projects => {
      console.log('projects', projects);
      this.projects = projects;
    });
  
  }

 
  formProject : FormGroup = this._formBuilder.group({
    name: [''],
    userId : [{value : this.userService.getUserId()}], 
    description: [''],
    date: [ new Date()],
    image: ['']
  });

  async addProject(){
    console.log('add project' , this.formProject.value);
    const r = await this._projectService.addProjects(this.formProject.value);
    console.log('add project' , r);
  }

  async delete(id: any){
    //convertir el id a string
    const idString = id.toString();
    console.log('delete id', id);
    const res = this._projectService.deleteProject(idString);
    console.log('delete', res);
  }

  getUsrId(){
    let userId = this.userService.getUserId();
    return userId
  }

}
