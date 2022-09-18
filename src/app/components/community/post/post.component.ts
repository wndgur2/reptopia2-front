import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {


  post: Post ={
    id: "",
    authorId: "",
    title: '',
    content: '',
    likes: 0,
    views: 0,
    commentIds: [],
    date: ''
  };
  private postId:string;
  private postSub: Subscription;

  constructor(public postsService: PostsService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.postId = paramMap.get("postId")!;
      this.postsService.getPost(this.postId);
      this.postSub = this.postsService.getPostUpdateListener()
        .subscribe((postData:Post) => {
        this.post = postData;
      });
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  onDeletePost(id:string){
    this.postsService.deletePost(id);
    this.router.navigate(['/community']);
  }

  onLike(liked:boolean){
    this.postsService.likePost(this.post.id, liked);
  }
}
