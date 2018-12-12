import { Routes } from '@angular/router';

import { DashboardComponent } from '../../shared/dashboard/dashboard.component';
import { UserProfileComponent } from '../../shared/user-profile/user-profile.component';
import { TableListComponent } from '../../shared/table-list/table-list.component';
import { TypographyComponent } from '../../shared/typography/typography.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { MapsComponent } from '../../shared/maps/maps.component';
import { NotificationsComponent } from '../../shared/notifications/notifications.component';
import { UpgradeComponent } from '../../shared/upgrade/upgrade.component';

export const TeacherLayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
    },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
