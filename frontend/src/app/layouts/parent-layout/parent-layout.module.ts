import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentLayoutRoutes } from '../parent-layout/parent-layout.routing';
import { DashboardComponent } from '../../shared/dashboard/dashboard.component';
import { UserProfileComponent } from '../../shared/user-profile/user-profile.component';
import { TableListComponent } from '../../shared/table-list/table-list.component';
import { TypographyComponent } from '../../shared/typography/typography.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { MapsComponent } from '../../shared/maps/maps.component';
import { NotificationsComponent } from '../../shared/notifications/notifications.component';
import { UpgradeComponent } from '../../shared/upgrade/upgrade.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ParentLayoutRoutes),
    SharedModule
  ],
  declarations: [
  ]
})

export class ParentLayoutModule {}
