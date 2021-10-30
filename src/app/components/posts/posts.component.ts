import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/models/post.model';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  private subs: Subscription = new Subscription();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPostSubject();
    this.getAll();
  }

  getPostSubject() {
    this.subs.add(
      this.postService.getPostSubjectData().subscribe((resp) => {
        const { action, data } = resp;

        switch (action) {
          case 'create': {
            this.posts.push(data);
            break;
          }
          case 'update': {
            const index = this.posts.findIndex((post) => post.id === data.id);
            this.posts[index] = data;

            break;
          }
          case 'delete': {
            this.posts = this.posts.filter((post) => post.id !== data.postId);
            break;
          }
          default:
            break;
        }
      })
    );
  }

  getAll() {
    this.subs.add(
      this.postService.getAll().subscribe(
        (resp) => {
          this.posts = resp;
        },
        (err) => {}
      )
    );
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
