import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/proyectsInterface';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  userId: string | null = null
  projects: Project[] | undefined
  https: string | undefined;


  constructor(
    private _formBuilder: FormBuilder,
    private _projectService: ProjectsService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this._projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
    this.userService.getUserId().subscribe(userId => {
      this.formProject.get('userId')?.setValue(userId || null);
    });
    this.https = 'https://picsum.photos/400/300';
  }

  formProject: FormGroup = this._formBuilder.group({
    name: [''],
    userId: [this.getUser()],
    description: [''],
    date: [new Date()],
    image: ['']
  });

  async addProject() {
    await this._projectService.addProjects(this.formProject.value);
    this.formProject.reset();
  }



  getUser() {
    this.userService.getUserId().subscribe(userId => {
      this.userId = userId || null;    
    });
  }

}
