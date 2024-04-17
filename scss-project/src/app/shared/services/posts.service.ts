import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  
  constructor(private http:HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<{name:string}>( 'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
    postData,{
      observe:'response' // Observing Different Types of Responses . events,body
    }
    ).subscribe(
      responseData => {
        console.log(responseData);
      },
      error => {
        this.error.next(error.message);
      }
    );
}
}
