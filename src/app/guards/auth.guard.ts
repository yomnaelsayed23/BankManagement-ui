import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const isAuthenticated = this.authService.isLoggedIn();
        console.log('AuthGuard: isAuthenticated =', isAuthenticated);
        if (isAuthenticated) {
            return of(true);
        } else {
            this.router.navigate(['/signin']);
            return of(false);
        }
    }
}
