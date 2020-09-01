import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[]=[];
  private postsUpdated= new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; //spread operator that copies the entire array
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) { //dependency injection
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }


}
