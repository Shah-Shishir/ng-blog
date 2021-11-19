import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FirebaseComponent } from './firebase.component';
import { HomeComponent } from './home/home.component';

const firebaseRoutes: Routes = [
  {
    path: '',
    component: FirebaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

export const firebaseRouting: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(firebaseRoutes);
