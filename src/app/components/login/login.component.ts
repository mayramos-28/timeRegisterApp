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
     
         localStorage.setItem('user',response.user.uid)
         this.router.navigate(['/dashboard'])
         alert('success login')

     
   
    })
    .catch(
      err => alert('error login')
    )

  }

  onGoogleSubmit(){
    this.userService.loginWithGoogle()
    .then( response => {
      
      localStorage.setItem('user',response.user.uid)
      localStorage.setItem('userName',response.user?.displayName || '')
      this.router.navigate(['/dashboard'])
      alert('success login')

    })
    .catch( err => console.log('error login with google',err))
  }

}
