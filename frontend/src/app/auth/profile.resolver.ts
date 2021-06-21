import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<User> {
  constructor(private authService:AuthService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.authService.getProfile();
  }
}
  