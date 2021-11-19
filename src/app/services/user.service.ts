import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<HttpResponse<User[]>>(`${this.apiUrl}/users`);
  }
}
