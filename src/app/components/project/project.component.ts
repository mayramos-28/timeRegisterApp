import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private _projectService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.getProject();
    });
    console.log('projectID', this.projectId)
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


  async deleteClick(id: any ){
    const idString = id.toString();
   this._projectService.deleteProject(idString);
  }
}
