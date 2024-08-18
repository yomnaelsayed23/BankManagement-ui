import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from "../../services/auth/auth.service";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    SigninComponent,
    SignupComponent,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    isLogin = false;



    ngOnInit() {
      // Subscribe to the login status
      this.authService.isLogin$.subscribe(status => {
        this.isLogin = status;
      });
    }
  constructor(private authService: AuthService){}

  logOut(){
    this.authService.logout
  }
}
