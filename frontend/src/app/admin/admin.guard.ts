import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
      return new Observable<boolean>((observer: Observer<boolean>) => {
        
        this.authService.getProfile().subscribe(data => {
          if(data.isAdmin) {
            observer.next(true);
            observer.complete();
          }
          else {
            this.router.navigate(['403'])
              .then(() => {
                observer.complete();
              });
            observer.next(false);  
          }
        })
      });
  }
  
}
