import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { Post } from "src/app/models/post.model";
import { PostsService } from "../post.service";

@Component({
    selector: "app-create-post",
    templateUrl: "./create-post.component.html",
    styleUrls: ["../../../app.component.css", "./create-post.component.css"],
})
export class CreatePostComponent implements OnInit {
    enteredTitle = "";
    enteredContent = "";
    post: Post;
    isLoading = false;
    private mode = "create";
    private postId: string;

    constructor(
        public postsService: PostsService,
        public route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has("postId")) {
                console.log("edit mode");
                this.mode = "edit";
                this.postId = paramMap.get("postId")!;
                this.isLoading = true;
                this.postsService.getPost(this.postId);
                this.postsService
                    .getPostUpdateListener()
                    .subscribe((postData: Post) => {
                        this.isLoading = false;
                        this.post = postData;
                    });
            } else {
                this.mode = "create";
                this.postId = "";
            }
        });
    }

    onSavePost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.postsService.addPost(form.value.title, form.value.content);
        } else {
            var newPost = { ...this.post };
            newPost.title = form.value.title;
            newPost.content = form.value.content;
            this.postsService.updatePost(newPost);
        }
        form.resetForm();
    }
}
