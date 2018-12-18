import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Observable } from 'rxjs/Observable';
  import { Injectable } from '@angular/core';
  import { ParentAuthService } from '../parent/parentAuth.service';
  @Injectable()
  export class ParentAuthGuard implements CanActivate, CanActivateChild {
    constructor(private parentAuthService: ParentAuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.parentAuthService.isParentAuthenticated()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              this.router.navigate(['/login']);
            }
          }
        );
    }
  
    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
  }