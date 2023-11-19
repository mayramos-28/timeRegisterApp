import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggin: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.IsLogged();
  }

  logout (){
    console.log(` logging out`);
    this.userService.logout()
    .then(() => this.router.navigate(['/login']))
    .catch((error) => console.log(error));
  }
  IsLogged(){
    this.userService.isUserLogged().subscribe((user) => {
      console.log('user de isLogged', user)
     this.isLoggin = user;
     console.log('isLoggin', this.isLoggin)
    });
  }
}
