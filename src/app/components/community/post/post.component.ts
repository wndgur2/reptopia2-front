import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;
  post: Post ={
    id: 0,
    authorId: 0,
    title: '',
    content: '',
    likes: 0,
    views: 0,
    commentIds: [],
    date: ''
  };

  constructor(public postsService: PostsService, private router:Router) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.post = this.postsService.getPost(parseInt(this.router.url.split('/')[5]));
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
