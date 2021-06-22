import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageService;
  
  constructor(private http:HttpClient, private jwtHelper:JwtHelperService, private router:Router) {
    this.localStorageService = localStorage;
  }

  register(user:User) {
    return this.http.post(`${environment.API_URL}auth/signup`, user);
  }

  login(credentials:any) {
    return this.http.post(`${environment.API_URL}auth/signin`, credentials);
  }

  logout() {
    this.eraseToken();
    return this.router.navigate(['login']);
  }

  storeToken(data:any) {
    this.localStorageService.setItem('access-token', data.token);
  }

  eraseToken() {
    this.localStorageService.removeItem('access-token');
  }

  getToken():string {
    return this.localStorageService.getItem('access-token') || "{}";
  }

  isLoggedIn() {
    const token = this.localStorageService.getItem('access-token');
    if(token) 
    {
      try {
        return !this.jwtHelper.isTokenExpired(token);
      } 
      catch(error:any) {
        console.log(error);
      }
    }
    return false;
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}auth/profile`); 
  }
}
