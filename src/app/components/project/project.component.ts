import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/proyectsInterface';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectId: string = '';
  project: Project | undefined;
  userId: string | null = null
  date: Date = new Date();
  constructor(
    private _projectService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.getProject();
    });

  }

  getProject() {
    if (!this.projectId) {
      return;
    }
    const doc = this._projectService.getProject(this.projectId);
    doc.then((res: any) => {
      this.project = res.data();
    });
  }
  deleteClick() {
    const idString =  this.projectId;
    this._projectService.deleteProject(idString)
    .then(() => {
      this.router.navigate(['/dashboard']);     
    })
    .catch((error) => {
      console.error('Error al eliminar el proyecto', error);
    });
  }
  editClick() {
    alert('edit' + this.projectId)
  }

 
}
