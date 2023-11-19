import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/proyectsInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
 @Input() idTask: any;
 tasks:Task[] | undefined;

 constructor(
  private _taskService: TasksService,
 ) { }
  
  ngOnInit(): void {
    this.geTask();
    console.log('idTask', this.idTask)
  }

  async geTask() {
    if (!this.idTask) {
      return;
    }
    const doc = this._taskService.getTask(this.idTask);

    doc.then((res: any) => {     
      this.tasks = res.data();
          console.log('tasks', this.tasks)
    });

  }
  async deleteClick(id: any ){
    const idString = id.toString();
   this._taskService.deleteTask(idString);
  }
}
