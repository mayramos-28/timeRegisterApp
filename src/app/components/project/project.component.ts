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

  projectId: string | null = null;
  project: Project | undefined;
  userId: string | null = null
  constructor(
    private _projectService: ProjectsService,
    private route: ActivatedRoute,
    private userService: UserService
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
    console.log('doc', doc);
    doc.then((res: any) => {
      console.log('res', res.data());
      this.project = res.data();
    });
  }


  async deleteClick(id: any ){
    const idString = id.toString();
    console.log('delete id', id);
    const res = this._projectService.deleteProject(idString);
    console.log('delete', res);
  }
}
