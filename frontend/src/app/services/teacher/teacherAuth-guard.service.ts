import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Observable } from 'rxjs/Observable';
  import { Injectable } from '@angular/core';
  import { TeacherAuthService } from '../teacher/teacherAuth.service';
  @Injectable()
  export class TeacherAuthGuard implements CanActivate, CanActivateChild {
    constructor(private teacherAuthService: TeacherAuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.teacherAuthService.isTeacherAuthenticated()
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