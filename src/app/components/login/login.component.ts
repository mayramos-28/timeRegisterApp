import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userToken:string = '';

  constructor(private _formBuilder: FormBuilder, private userService:UserService, private router:Router) { }
  

  formLogin : FormGroup = this._formBuilder.group({
    email: [''],
    password: [''],
  })



  onSubmit() {
    this.userService.login(this.formLogin.value)
    .then( response => {
      console.log('success login',response)
      this.router.navigate(['/profil'])
    })
    .catch(
      err => console.log('error login',err)
    )

  }

  onGoogleSubmit(){
    this.userService.loginWithGoogle()
    .then( response => {
      console.log('success login',response)
      this.router.navigate(['/home'])
    })
    .catch( err => console.log('error login with google',err))
  }

}
