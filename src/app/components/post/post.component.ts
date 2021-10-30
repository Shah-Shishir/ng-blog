import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from 'rxjs';

import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  private subs: Subscription = new Subscription();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  update(post: Post) {
    this.postService.setEditFormSubjectData(post);
  }

  delete(postId: number) {
    this.subs.add(
      this.postService.delete(postId).subscribe(() => {
        this.postService.setPostSubjectData('delete', { postId });
      })
    );
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
