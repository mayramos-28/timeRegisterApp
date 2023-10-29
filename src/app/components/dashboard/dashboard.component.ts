import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  date: string = '';
  startTime: string = '';
  stopTime: string = '';
  totalTime: string = ''; // Ahora se guarda como una cadena en formato hh:mm:ss
  initialValue: Date | null = null;
  finalValue: Date | null = null;

  run() {
    this.initialValue = new Date();
    this.date = (this.initialValue.getMonth() + 1) + '/' + this.initialValue.getDate() + '/' + this.initialValue.getFullYear();
    this.startTime = this.formatTime(this.initialValue);
  }

  stop() {
    this.finalValue = new Date();
    this.stopTime = this.formatTime(this.finalValue);
    this.calculateTotalTime();
  }

  private formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  private calculateTotalTime() {
    if (this.initialValue && this.finalValue) {
      const differenceInMillis = this.finalValue.getTime() - this.initialValue.getTime();
      const seconds = Math.floor((differenceInMillis / 1000) % 60);
      const minutes = Math.floor((differenceInMillis / (1000 * 60)) % 60);
      const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
      this.totalTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
    }
    console.log(this.totalTime);
    console.log(this.initialValue);
    console.log(this.finalValue);
  }
}
