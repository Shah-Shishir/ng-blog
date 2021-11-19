// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Components
import { HomeComponent } from './home/home.component';
import { FirebaseComponent } from './firebase.component';
import { TaskComponent } from './task/task.component';

// Routing
import { firebaseRouting } from './firebase.routing';

@NgModule({
  declarations: [HomeComponent, FirebaseComponent, TaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    firebaseRouting,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    DragDropModule,
  ],
})
export class FirebaseModule {}
