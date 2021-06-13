import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      if(this.authService.isLoggedIn()) {
        observer.next(true);
        observer.complete();
      }
      else {
        this.router.navigate(['login'])
          .then(() => {
            observer.complete();
          });
        observer.next(false);  
      }
    })
  }
}
