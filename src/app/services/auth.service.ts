import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8085/api/auth';
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}

  // Signup method
  signup(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, user, { headers });
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
        })
      );
  }

  // Save token to localStorage
  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // Logout method
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
