import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ShopComponent } from './components/shop/shop.component';
import { BreedersComponent } from './components/breeders/breeders.component';
import { UserComponent } from './components/user/user.component';
import { ItemsComponent } from './components/shop/items/items.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommunityComponent } from './components/community/community.component';
import { PostsComponent } from './components/community/posts/posts.component';
import { CreaturesComponent } from './components/breeders/creatures/creatures.component';
import { PostComponent } from './components/community/post/post.component';
import { ItemDetailComponent } from './components/shop/item-detail/item-detail.component';
import { TipComponent } from './components/tip/tip.component';
import { CreatePostComponent } from './components/community/create-post/create-post.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    BreedersComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    CommunityComponent,
    PostsComponent,
    CreaturesComponent,
    PostComponent,
    ItemDetailComponent,
    TipComponent,
    CreatePostComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
