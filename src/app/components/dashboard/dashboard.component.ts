import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
date :string = '';
runTime: string = '';
stopTime : string = ''

totalTime: number = 0;
initialValue: Date | null = null;
finalValue: Date | null = null;

run() {
  console.log('initial value', this.initialValue = new Date());
  this.date = this.initialValue.getMonth() +'/' + (this.initialValue.getDate()+1) + '/'+ this.initialValue.getFullYear();
  console.log('initial value ', this.date);
  
  this.runTime = this.initialValue.getHours()+ '' + this.initialValue.getMinutes() + '' + this.finalValue?.getSeconds();
  console.log('horas ', this.runTime);
}

stop() {
  console.log('final value', this.finalValue = new Date());
  this.stopTime = this.finalValue.getMonth()+'/' + (this.finalValue.getDate()+1) + '/'+ this.finalValue.getFullYear();
  console.log('final time', this.stopTime )
}


}
