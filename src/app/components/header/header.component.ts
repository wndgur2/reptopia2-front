import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, userA } from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isPhone = false;
  userData: User = userA;
  userIsAuthenticated = false;
  private authStatusSubs: Subscription;
  private userDataSub: Subscription;
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    window.innerWidth < 800 ? this.isPhone = true : this.isPhone = false;

    this.userIsAuthenticated = this.authService.getIsAuth();
    if(this.userIsAuthenticated) this.userData = this.authService.getUserData();

    this.userDataSub = this.authService
    .getUserDataListener()
    .subscribe(userData => {
      this.userData = userData;
    });

    this.authStatusSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuth => {
        this.userIsAuthenticated = isAuth;
      });
  }

  ngOnDestroy() {
    this.authStatusSubs.unsubscribe();
    this.userDataSub.unsubscribe();
  }
}
