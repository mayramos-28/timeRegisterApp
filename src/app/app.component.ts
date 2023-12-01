import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sesion:boolean = false;
  ngOnInit(): void {
    this.sesion = localStorage.getItem('user') ? true : false;
  }
  title = 'timeapp';
}
