import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, userA } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../auth.css', './user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userData: User = userA;
  userDataSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.getUserData();
    this.userDataSub = this.authService
    .getUserDataListener()
    .subscribe(userData => {
      this.userData = userData;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userDataSub.unsubscribe();
  }

}
