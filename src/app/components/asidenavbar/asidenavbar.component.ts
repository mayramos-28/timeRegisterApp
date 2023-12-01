import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent {
  isLoggin: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.IsLogged();
  }

  logout (){   
    this.userService.logout()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login'])
    })
    .catch((error) => console.log(error));
  }
  IsLogged(){
    this.userService.isUserLogged().subscribe((user) => {
     this.isLoggin = user;  
    });
  }
}
