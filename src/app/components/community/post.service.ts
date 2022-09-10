import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Post } from "../../models/post.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class PostsService {

  private post: Post;
  private postUpdated = new Subject<Post>();

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router : Router) {}

  getPost(id:string){
    return this.http
      .get<{
        _id:string,
        title:string,
        content:string,
        authorId: string,
        commentIds: number[],
        likes: number,
        views: number,
        date: string
       }>(
        "http://localhost:3000/api/posts/"+id
      )
      .subscribe((transformedPost) => {
        this.post = {
          id: transformedPost._id,
          title:transformedPost.title,
          content:transformedPost.content,
          authorId:transformedPost.authorId,
          commentIds:transformedPost.commentIds,
          likes:transformedPost.likes,
          views:transformedPost.views,
          date:transformedPost.date,
        }
        this.postUpdated.next(this.post);
      });
  }

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/posts")
      .pipe(
        map(postData => {
          return postData.posts.map((post:any) => {
            return {
              title: post.title,
              id: post._id,
              authorId: post.authorId,
              date: post.date,
              likes: post.likes,
              views: post.views
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }


  addPost(authorId: string, title: string, content: string) {
    const now = new Date();
    const post: Post = { id: "zxc", title: title, content: content, authorId: authorId, likes: 0, views:0, commentIds: [], date: now.toLocaleString()};
    this.http
      .post<{ message: string; postId: string }>(
        "http://localhost:3000/api/posts",
        post
      )
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/community"]);
      });
  }

  updatePost(post:Post) {
    this.http
      .put("http://localhost:3000/api/posts/" + post.id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/community"]);
      });
  }

  deletePost(postId: string) {
    this.http
      .delete("http://localhost:3000/api/posts/" + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
    }
}
