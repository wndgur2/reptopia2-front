import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Post } from "../../models/post.model";
import { Router } from "@angular/router";
import serverUrl from "../../consts";

@Injectable({ providedIn: "root" })
export class PostsService {
    private post: Post;
    private postUpdateListener = new Subject<Post>();

    private posts: Post[] = [];
    private postsUpdateListener = new Subject<Post[]>();

    constructor(private http: HttpClient, private router: Router) {}

    getPost(id: string) {
        return this.http
            .get<{
                _id: string;
                title: string;
                content: string;
                authorId: string;
                commentIds: number[];
                likes: number;
                views: number;
                createdAt: string;
                authorName: string;
            }>(serverUrl + "/api/posts/" + id)
            .subscribe((transformedPost) => {
                this.post = {
                    id: transformedPost._id,
                    ...transformedPost,
                };
                this.postUpdateListener.next(this.post);
            });
    }

    getPosts(type: string, authorId?: any) {
        let url: string;
        url = "/api/posts";
        if (type === "my") {
            if (authorId) {
                url = "/api/posts/postBy/" + authorId;
            } else {
                this.router.navigate(["/login"]);
            }
        } else if (type === "announcement") {
            url = "/api/posts/postBy/63270878fd3beea299e5cfc6";
        }
        this.http
            .get<{ message: string; posts: any }>(serverUrl + url)
            .pipe(
                map((postData) => {
                    return postData.posts.map((post: any) => {
                        return {
                            id: post._id,
                            // title: post.title,
                            // authorId: post.authorId,
                            // date: post.date,
                            // likes: post.likes,
                            // views: post.views
                            ...post,
                        };
                    });
                })
            )
            .subscribe((transformedPosts) => {
                this.posts = transformedPosts;
                this.postsUpdateListener.next([...this.posts]);
            });
    }

    getPostsUpdateListener() {
        return this.postsUpdateListener.asObservable();
    }

    getPostUpdateListener() {
        return this.postUpdateListener.asObservable();
    }

    addPost(title: string, content: string) {
        const post = {
            id: "",
            title: title,
            content: content,
            authorId: "",
            authorName: "",
            likes: 0,
            views: 0,
            commentIds: [],
        };
        this.http
            .post<{ message: string; postId: string; authorId: string }>(
                serverUrl + "/api/posts",
                post
            )
            .subscribe((responseData) => {
                this.router.navigate(["/community"]);
            });
    }

    updatePost(post: Post) {
        this.http
            .put(serverUrl + "/api/posts/" + post.id, post)
            .subscribe((response) => {
                const updatedPosts = [...this.posts];
                const oldPostIndex = updatedPosts.findIndex(
                    (p) => p.id === post.id
                );
                updatedPosts[oldPostIndex] = post;
                this.posts = updatedPosts;
                this.postsUpdateListener.next([...this.posts]);
                this.router.navigate(["/community"]);
            });
    }

    deletePost(postId: string) {
        this.http.delete(serverUrl + "/api/posts/" + postId).subscribe(() => {
            const updatedPosts = this.posts.filter(
                (post) => post.id !== postId
            );
            this.posts = updatedPosts;
            this.postsUpdateListener.next([...this.posts]);
        });
    }

    likePost(post: Post, liked: boolean, userId: string) {
        console.log("Like post!");
        this.http
            .put(serverUrl + "/api/posts/like/" + post.id, post)
            .subscribe();
    }
}
