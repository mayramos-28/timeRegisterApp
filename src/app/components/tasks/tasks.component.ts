import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/interfaces/proyectsInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  @Input() idProject: string | null = null;
  @Output() idProjectChange = new EventEmitter<string>();
  tasks:Task[] | undefined;

  constructor(
    private _formBuilder: FormBuilder,
    private _taskService: TasksService,

  ) { }

  taskForm: FormGroup = this._formBuilder.group({
    name: [''],
    projectId: [this.idProject],
    description: [''],
    date: [new Date()],

  });

  async addTask() {
   const r = await this._taskService.addTask(this.taskForm.value);
    this.taskForm.reset();
    console.log('task', r)
  }

  delete(id: any) {
    const idString = id.toString();
    this._taskService.deleteTask(idString);

  }


}
