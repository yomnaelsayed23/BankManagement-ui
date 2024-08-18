import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8085/api/auth';
  private tokenKey = 'auth-token';
  private isLoginSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) {}

    // Observable for other components to subscribe to
  isLogin$ = this.isLoginSubject.asObservable();
  // Signup method
  signup(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, user, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Login method
  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.apiUrl}/login`, credentials, {
        headers,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const token = response.headers.get('Authorization');
          if (token) {
            this.saveToken(token);

          }
          return response.body;
        }),
        catchError(this.handleError)
      );
  }


  // Logout method
  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  // Handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // for demo purposes only
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
  saveToken(token: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.tokenKey, token);
      this.isLoginSubject.next(true);
    }
  }

  // Get token from localStorage
  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
