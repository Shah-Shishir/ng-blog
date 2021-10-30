import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = environment.apiUrl;

  private postSubject: Subject<any> = new Subject<any>();
  private editFormSubject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  setPostSubjectData(action: string, data: any) {
    this.postSubject.next({ action, data });
  }

  getPostSubjectData(): Observable<{ action: string; data: any }> {
    return this.postSubject;
  }

  setEditFormSubjectData(post: Post) {
    this.editFormSubject.next(post);
  }

  getEditFormSubjectData(): Observable<Post> {
    return this.editFormSubject;
  }

  getAll(): Observable<any> {
    return this.http.get<HttpResponse<Post[]>>(`${this.apiUrl}/posts`);
  }

  create(data: Post): Observable<any> {
    return this.http.post<HttpResponse<Post>>(`${this.apiUrl}/posts`, data);
  }

  update(post: Post): Observable<any> {
    return this.http.put<HttpResponse<Post>>(
      `${this.apiUrl}/posts/${post.id}`,
      post
    );
  }

  delete(postId: number): Observable<any> {
    return this.http.delete<HttpResponse<Post>>(
      `${this.apiUrl}/posts/${postId}`
    );
  }
}
