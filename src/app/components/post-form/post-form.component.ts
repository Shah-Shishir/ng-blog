import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/models/post.model';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  action: string = 'Create';
  post: Post = new Post();
  private subs: Subscription = new Subscription();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getUpdatedPost();
  }

  getUpdatedPost() {
    this.subs.add(
      this.postService.getEditFormSubjectData().subscribe((post) => {
        this.action = 'Update';
        this.post = { ...post };
        document.querySelector('input')?.focus();
      })
    );
  }

  handleSubmit(form: NgForm) {
    if (this.action === 'Create') {
      this.subs.add(
        this.postService.create(this.post).subscribe((resp) => {
          this.postService.setPostSubjectData('create', resp);
          form.reset();
        })
      );
    } else if (this.action === 'Update') {
      this.subs.add(
        this.postService.update(this.post).subscribe(() => {
          this.postService.setPostSubjectData('update', this.post);
          this.action = 'Create';
          this.post = {
            title: '',
            body: '',
          };
        })
      );
    }
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
