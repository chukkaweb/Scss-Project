import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub :any = Subscription;
  constructor(
    private http: HttpClient, 
    private postsService: PostsService
    ) {}
    onCreatePost(postData: Post) {
      this.postsService.createAndStorePost(postData.title, postData.content);
    }
    onFetchPosts() {

    }
    onClearPosts() {

    }

    onHandleError() {
      this.error = null;
    }
  
    ngOnDestroy() {
      this.errorSub.unsubscribe();
    }

}
