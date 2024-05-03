import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import serverUrl from "src/app/consts";
import { AuthData, UserData } from "./auth-data.model";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { User } from "src/app/models/user.model";

@Injectable({ providedIn: "root" })
export class AuthService {
    private isAuthenticated = false;
    private token: string;
    private tokenTimer: any;
    private userData: User;
    private userId: string;
    private userDataListener = new Subject<User>();
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) {}

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getUserId() {
        return this.userId;
    }

    getUserData() {
        return this.userData;
    }

    getUserDataListener() {
        return this.userDataListener.asObservable();
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(email: string, password: string, name: string) {
        const authData: AuthData = { email, password, name };
        this.http.post(serverUrl + "/api/user/signup", authData).subscribe({
            next: (response) => {
                console.log(response);
                this.router.navigate(["/login"]);
            },
            error: (err) => {
                console.log(err.error.error.errors);
            },
        });
    }

    login(email: string, password: string) {
        const authData = { email, password };
        this.http
            .post<{ token: string; expiresIn: number; userData: User }>(
                serverUrl + "/api/user/login",
                authData
            )
            .subscribe({
                next: (response) => {
                    this.token = response.token;
                    if (response.token) {
                        const expiresInDuration = response.expiresIn;
                        this.userData = response.userData;
                        this.userId = response.userData.id;
                        this.userDataListener.next(response.userData);
                        this.isAuthenticated = true;
                        this.authStatusListener.next(true);
                        const expirationDate = new Date(
                            new Date().getTime() + expiresInDuration * 1000
                        );
                        this.saveAuthData(
                            response.token,
                            expirationDate,
                            this.userData
                        );
                        this.router.navigate(["/"]);
                    }
                },
                error: (err) => {
                    console.log(err.error.message);
                },
            });
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            console.log("NOT_AUTHENTICATED");
            return;
        }
        const now = new Date();
        const expiresIn =
            authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.userId = authInformation.userId;
            this.requestUserData(authInformation.userId);
            this.setAuthTimer(expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            console.log("RELOADED_STILL_LOGGEDIN");
        }
    }

    requestUserData(userId: string) {
        this.http
            .get<User>(serverUrl + "/api/user/" + userId)
            .subscribe((userData) => {
                this.userData = userData;
                this.userDataListener.next(userData);
            });
    }

    private setAuthTimer(duration: number) {
        console.log("AUTH: " + duration + "ms left");
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration);
    }

    logout() {
        this.token = "";
        this.isAuthenticated = false;
        this.userData = {
            id: "",
            name: "",
            email: "",
            password: "",
            level: 0,
            achievements: [],
            reppi: 0,
            creatureIds: [],
            itemIds: [],
            postIds: [],
            commentIds: [],
            likedPostIds: [],
            dislikedPostIds: [],
            likedCommentIds: [],
            viewedPostIds: [],
        };
        this.userDataListener.next(this.userData);
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    }

    saveAuthData(token: string, expirationDate: Date, userData: User) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userData.id);
    }

    private clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    }

    private getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("userId");

        if (!token || !expirationDate || userId === undefined) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId!,
        };
    }
}
