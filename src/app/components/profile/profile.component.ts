import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { calcularEdad, getZip } from 'src/app/utilities/utilities';
import { legalAge as legalAgeValidator } from 'src/app/validators/formValidator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    // private userService: UserService
  ) { }
  ngOnInit(): void {
    this.setAge();
    this.setZip()
  }

  formProfile: FormGroup = this._formBuilder.group({
    email: ['', [Validators.pattern(/^.+@.+\..+com$/)]],
    pass: ['', Validators.pattern(/^[0-9]+$/)],
    address: ['', []],
    city: ['', [Validators.required]],
 
    zip: [{ value: null, disabled: true }, [Validators.pattern(/^[0-9]+$/)]],
    birth: ['', [Validators.required, legalAgeValidator()]],
    age: [{ value: null, disabled: true }, []],

  })

  setAge() {
    this.formProfile.get('birth')?.valueChanges.subscribe((value) => {
      this.formProfile.get('age')?.setValue(calcularEdad(new Date(value)))
    })
  }
  setZip(){
    this.formProfile.get('city')?.valueChanges.subscribe( (value) => {
      this.formProfile.get('zip')?.setValue(getZip(value))
    })
  }

  onSubmit() { }

}
