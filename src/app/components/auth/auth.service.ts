import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import serverUrl from "src/app/consts";
import { AuthData } from "./auth-data.model";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http:HttpClient, private router : Router){}

  getToken(){ return this.token; }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email:string, password:string, checkPassword:string){
    const authData: AuthData = {email, password};
    this.http.post(serverUrl+"/api/user/signup", authData)
      .subscribe(response=>{
        console.log(response);
      })
    this.router.navigate(["/login"]);
  }

  login(email: string, password: string){
    const authData: AuthData = {email, password};
    this.http.post<{token:string, expiresIn: number}>(serverUrl+"/api/user/login", authData)
      .subscribe(response=>{
        this.token = response.token;
        if (response.token) {
          const expiresInDuration = response.expiresIn;
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const expirationDate = new Date(new Date().getTime() + expiresInDuration * 1000);
          this.saveAuthData(response.token, expirationDate);
          this.router.navigate(["/"]);
          console.log("LOGGED_IN");
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      console.log("NOT_AUTHENTICATED");
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn);
      this.authStatusListener.next(true);
      console.log("RELOADED_STILL_LOGGEDIN")
    }
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
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  saveAuthData(token:string, expirationDate: Date){
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
}
