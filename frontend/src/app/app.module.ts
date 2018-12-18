import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { TeacherLayoutComponent } from './layouts/teacher-layout/teacher-layout.component';
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AdminAuthService } from './services/admin/adminAuth.service';
import { ParentAuthService } from './services/parent/parentAuth.service';
import { StudentAuthService } from './services/student/studentAuth.service';
import { TeacherAuthService } from './services/teacher/teacherAuth.service';
import { AdminAuthGuard } from './services/admin/adminAuth-guard.service';
import { ParentAuthGuard } from './services/parent/parentAuth-guard.service';
import { TeacherAuthGuard } from './services/teacher/teacherAuth-guard.service';
import { StudentAuthGuard } from './services/student/studentAuth-guard.service';
import { IsAuthenticatedService } from './services/isAuthenticated.service';
@NgModule({
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminLayoutComponent,
    TeacherLayoutComponent,
    ParentLayoutComponent,
    StudentLayoutComponent,
    NotFoundComponent,
  ],
  providers: [
    AdminAuthService, 
    ParentAuthService, 
    StudentAuthService, 
    TeacherAuthService, 
    AdminAuthGuard, 
    ParentAuthGuard, 
    TeacherAuthGuard, 
    StudentAuthGuard,
  IsAuthenticatedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
