import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
    ],
  },
];

export const userRouting: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(userRoutes);
