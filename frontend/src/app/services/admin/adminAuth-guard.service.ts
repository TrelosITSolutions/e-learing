import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Observable } from 'rxjs/Observable';
  import { Injectable } from '@angular/core';
  import { AdminAuthService } from '../admin/adminAuth.service';
  @Injectable()
  export class AdminAuthGuard implements CanActivate, CanActivateChild {
    constructor(private adminAuthService: AdminAuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.adminAuthService.isAdminAuthenticated()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              console.log('true')
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