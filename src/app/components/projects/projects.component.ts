import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    { id: '12345', name: 'trabajo 1', description: 'trabajo para comer 1', date: '28/10/2023', image: 'https://picsum.photos/400/300' },
    { id: '12346', name: 'trabajo 23', description: 'trabajo para comer 2', date: '29/10/2023', image: 'https://picsum.photos/400/300'},
    { id: '12347', name: 'trabajo 3', description: 'trabajo para comer 3', date: '30/10/2023', image: 'https://picsum.photos/400/300' },
    
  ];
  constructor(
    private _formBuilder: FormBuilder,
  ) { } 

  formProject : FormGroup = this._formBuilder.group({
    name: [''],
    description: [''],
    date: [''],
    image: ['']
  });

  addProject(){
    alert('add project');
  }
}
