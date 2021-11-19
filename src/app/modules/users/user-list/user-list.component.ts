import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {
  sortedUsers = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'city',
    'phone',
    'website',
    'companyname',
  ];

  private subs: Subscription = new Subscription();

  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private userService: UserService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getAll();
  }

  ngAfterViewInit(): void {
    this.sortedUsers.sort = this.sort;
  }

  getAll(): void {
    this.subs.add(
      this.userService.getAll().subscribe((resp) => {
        this.sortedUsers.data = resp as User[];
      })
    );
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sortedUsers.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
