import { Component, OnInit } from '@angular/core';
import { calculateTotalTime, formatTime } from 'src/app/utilities/calculateTIme';

@Component({
  selector: 'app-time-register',
  templateUrl: './time-register.component.html',
  styleUrls: ['./time-register.component.scss']
})
export class TimeRegisterComponent implements OnInit {
  ngOnInit(): void {
    this.date = new Date().toLocaleDateString();
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
  }

  stop() {
    this.finalValue = new Date();
    this.stopTime = formatTime(this.finalValue);
     this.totalTime = calculateTotalTime(this.initialValue, this.finalValue);
  }

}
