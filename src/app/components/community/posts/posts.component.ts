import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "src/app/models/post.model";
import { Subscription } from "rxjs";
import { PostsService } from "../post.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: [
        "../../../app.component.css",
        "./posts.component.css",
        "../community.component.css",
    ],
})
export class PostsComponent implements OnInit, OnDestroy {
    posts: Post[] = [];
    boardType: string = "all";
    private postsSub: Subscription;

    constructor(
        public authService: AuthService,
        public postsService: PostsService,
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            this.boardType = paramMap.get("boardType")!;
            this.postsService.getPosts(
                this.boardType,
                this.authService.getUserData()?.id
            );
        });
        this.postsSub = this.postsService
            .getPostsUpdateListener()
            .subscribe((posts: Post[]) => {
                this.posts = posts;
            });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }

    dateToString(iso: string) {
        const d = new Date(iso).toLocaleString();
        return d.slice(0, -6) + d.slice(-3, d.length);
    }
}
