import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from 'app/services/admin/adminAuth.service';
import { StudentAuthService } from 'app/services/student/studentAuth.service';
import { TeacherAuthService } from 'app/services/teacher/teacherAuth.service';
import { ParentAuthService } from 'app/services/parent/parentAuth.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IsAuthenticatedService } from 'app/services/isAuthenticated.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private adminAuthService: AdminAuthService,
    private parentAuthService: ParentAuthService,
    private teacherAuthService: TeacherAuthService,
    private studentAuthService: StudentAuthService,
    protected localStorage: LocalStorage,
    private route: ActivatedRoute,
    private router: Router,
    private isAuth: IsAuthenticatedService) {}
  ngOnInit() {
    this.isAuth.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          console.log('true');
          if (this.isAuth.role === 'admin') {
            this.router.navigate(['/admin']);
          }
          if (this.isAuth.role === 'parent') {
            this.router.navigate(['/parent']);
          }
          if (this.isAuth.role === 'student') {
            this.router.navigate(['/student']);
          }
          if (this.isAuth.role === 'teacher') {
            this.router.navigate(['/teacher']);
          }

        }
      }
    );
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    const credentials ={
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }
    console.log(this.loginForm);
    if (this.loginForm.value.type === 'admin') {
      console.log('admin');
      this.adminAuthService.login(credentials).subscribe(
        (data) => {
          console.log(data);
          this.localStorage.setItem('token', data).subscribe(() => {});
          this.router.navigate(['/admin']);
        },
        (error) => {console.log(error)}
      );
    } else if (this.loginForm.value.type === 'parent') {
      console.log('parent');
      this.parentAuthService.login(credentials).subscribe(
        (data) => {
          console.log(data);
          this.localStorage.setItem('token', data).subscribe(() => {});
          this.router.navigate(['/parent']);
        },
        (error) => {console.log(error)}
      );
    } else if (this.loginForm.value.type === 'teacher') {
      console.log('teacher');
      this.teacherAuthService.login(credentials).subscribe(
        (data) => {
          console.log(data);
          this.localStorage.setItem('token', data).subscribe(() => {});
          this.router.navigate(['/teacher']);
        },
        (error) => {console.log(error)}
      );
    } else if (this.loginForm.value.type === 'student') {
      console.log('student');
      this.studentAuthService.login(credentials).subscribe(
        (data) => {
          console.log(data);
          this.localStorage.setItem('token', data).subscribe(() => {});
          this.router.navigate(['/student']);
        },
        (error) => {console.log(error)}
      );
    }
  }
}