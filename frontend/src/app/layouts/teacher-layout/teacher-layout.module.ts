import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeacherLayoutRoutes } from '../teacher-layout/teacher-layout.routing';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeacherLayoutRoutes),
    SharedModule
  ],
  declarations: []
})

export class TeacherLayoutModule {}
