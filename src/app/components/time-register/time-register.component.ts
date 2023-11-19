import { Component, Input, OnInit } from '@angular/core';
import { TimeRegister } from 'src/app/interfaces/proyectsInterface';
import { TimeRegisterService } from 'src/app/services/time-register.service';
import { calculateTotalTime, formatTime } from 'src/app/utilities/calculateTIme';

@Component({
  selector: 'app-time-register',
  templateUrl: './time-register.component.html',
  styleUrls: ['./time-register.component.scss']
})
export class TimeRegisterComponent implements OnInit {
  @Input() idParent: string = '';
  timeRegister :TimeRegister [] = [];
  allTimesRegisters: TimeRegister[] = [];
  constructor(private timeRegisterService : TimeRegisterService ) { }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString();
    this.getTimesRegisters();
  }
  date: string = '';
  startTime: string = '';
  stopTime: string = '';
  totalTime: string = ''; // Ahora se guarda como una cadena en formato hh:mm:ss
  initialValue: Date | null = null;
  finalValue: Date | null = null;

  run() {
    this.initialValue = new Date();
    this.startTime = formatTime(this.initialValue);
    this.date = this.initialValue.toLocaleDateString();

      
    
  }

  stop() {
    if(!this.idParent){
      return;
    }
    console.log('idParent', this.idParent)
    this.finalValue = new Date();
    this.stopTime = formatTime(this.finalValue);
    this.totalTime = calculateTotalTime(this.initialValue, this.finalValue);
    const newTimeRegister: TimeRegister = { parentId: this.idParent, isTask:false, date: this.date, startTime: this.startTime, stopTime: this.stopTime, totalTime: this.totalTime };
    this.timeRegister.push(newTimeRegister);
    this.timeRegisterService.addTimeRegister(newTimeRegister);
    this.startTime = '';
    this.stopTime = '';
    this.totalTime = '';
    this.initialValue = null;
    this.finalValue = null;

  }

  addTimeRegister(timeRegisters: TimeRegister[]) {
    this.timeRegisterService.addTimeRegister(timeRegisters[0]);
  }
  getTimesRegisters() {
    if(!this.idParent){
      return;
    }
    this.timeRegisterService.getTimesRegisters(this.idParent).subscribe(timeRegisters => {
      console.log('timeRegisters', timeRegisters);
      this.allTimesRegisters = timeRegisters;
    });
  }
  delete(id: any) {
    const idString = id.toString();
    this.timeRegisterService.deleteTimeRegister(idString);

  }

}
