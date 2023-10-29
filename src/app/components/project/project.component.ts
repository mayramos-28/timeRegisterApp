import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  getUser() {
    console.log('getUser', this.userService.getUserId())
    //console.log('getUser', this.userService.getTonken().subscribe(user => console.log('user', user?.uid)));
  }


}
