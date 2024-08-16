import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    NgClass,
    HttpClientModule, // Ensure this is correctly imported
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  error: string = '';

  constructor(
    private _Router: Router,
    private authService: AuthService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  submitLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          if (result) {
            const token = result.token;
            this.authService.saveToken(token);
            this._Router.navigate(['/home']);
          } else {
            this.error = 'Login failed, please try again';
          }
        },
        error: (err) => {
          this.error = 'Invalid email or password';
        }
      });
    }
  }
}
