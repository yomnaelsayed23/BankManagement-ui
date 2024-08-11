import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    NgIf,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  constructor(){}
  registerForm: FormGroup = new FormGroup(
    {full_name:new FormControl('',[Validators.required,Validators.minLength(20),Validators.maxLength(60)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      password: new FormControl('',[Validators.required])
          });
        // }
submitRegisterForm(registerForm:FormGroup){
console.log(registerForm.value);
localStorage.setItem('userValue',JSON.stringify(this.registerForm.value))



}

}
