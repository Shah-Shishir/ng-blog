import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Components
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';

// Routing
import { userRouting } from './user.routing';

// Directives
import { HighlightSearchDirective } from 'src/app/directives/highlight-search.directive';

@NgModule({
  declarations: [UsersComponent, UserListComponent, HighlightSearchDirective],
  imports: [
    CommonModule,
    userRouting,
    RouterModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [MatInputModule],
})
export class UsersModule {}
