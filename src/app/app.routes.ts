import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from "./guards/auth.guard";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path: "**",
    redirectTo: 'signin',
    pathMatch: 'full'
  }];
