import { Component, EventEmitter, Input, OnChanges, SimpleChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/interfaces/proyectsInterface';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() idProject: string | null = null;
  @Input() nameProject: string | undefined;

  tasks: Task[] | undefined;
  taskId: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _taskService: TasksService,

  ) { }
  ngOnInit(): void {   
    if (this.idProject) {
      this.changeValue();
      this._taskService.getTasks(this.idProject).subscribe(tasks => { 
        this.tasks = tasks;
      });
    }
  }

  taskForm: FormGroup = this._formBuilder.group({
    name: [''],
    projectId: [],
    description: [''],
    date: [new Date()],


  });

  async addTask() {
    if (!this.idProject) {
      return;
    }
    this.changeValue();
    const response = await this._taskService.addTask(this.taskForm.value);
    this.taskId = response.id;
    this.taskForm.reset();
    
  }



  delete(id: any) {
    const idString = id.toString();
    this._taskService.deleteTask(idString);

  }
  changeValue() {
    console.log('changeValue', this.idProject)
    this.taskForm.controls['projectId'].setValue(this.idProject);
  }


}
