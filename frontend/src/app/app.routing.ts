import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout.component';
import { TeacherLayoutComponent } from './layouts/teacher-layout/teacher-layout.component';

const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
    },
  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
    }]},
  {
    path: 'parent',
    component: ParentLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/parent-layout/parent-layout.module#ParentLayoutModule'
  }]},
  {
    path: 'teacher',
    component: TeacherLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/teacher-layout/teacher-layout.module#TeacherLayoutModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
}];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
