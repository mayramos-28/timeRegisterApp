import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }
  formRegister: FormGroup = this._formBuilder.group({
    email: [''],
    password: [''],
  })

  ngOnInit(): void {

  }
  onSubmit() {
    this.userService.register(this.formRegister.value)
    .then( response => {   
      this.router.navigate(['/login'])
    })
    .catch(error => console.log('error register ', error))
  }
}
