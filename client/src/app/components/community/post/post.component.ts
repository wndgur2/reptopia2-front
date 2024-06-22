import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Post, postA } from "src/app/models/post.model";
import { AuthService } from "../../auth/auth.service";
import { PostsService } from "../post.service";

@Component({
    selector: "app-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit, OnDestroy {
    isAuth: boolean = false;
    userId: string = "";

    post: Post = postA;
    private postId: string;
    private postSub: Subscription;

    constructor(
        public authService: AuthService,
        public postsService: PostsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        if (this.authService.getIsAuth()) {
            this.userId = this.authService.getUserId();
        }
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.postId = paramMap.get("postId")!;
            this.postsService.getPost(this.postId);
            this.postSub = this.postsService
                .getPostUpdateListener()
                .subscribe((postData: Post) => {
                    this.post = postData;
                });
        });
    }

    ngOnDestroy() {
        this.postSub.unsubscribe();
    }

    onDeletePost(id: string) {
        this.postsService.deletePost(id);
        this.router.navigate(["/community"]);
    }

    onLike(liked: boolean) {
        if (!this.authService.getIsAuth()) {
            this.router.navigate(["/login"]);
        }
        if (this.authService.getUserData()) {
        }
        if (liked) {
            this.post.likes += 1;
        } else {
            this.post.likes -= 1;
        }
        this.postsService.likePost(this.post, liked, this.userId);
    }

    dateToString(iso: string) {
        const d = new Date(iso).toLocaleString();
        return d.slice(0, -6) + d.slice(-3, d.length);
    }
}
