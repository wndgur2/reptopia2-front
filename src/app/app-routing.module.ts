import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedersComponent } from './components/breeders/breeders.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserComponent } from './components/user/user.component';
import { ItemsComponent } from './components/shop/items/items.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommunityComponent } from './components/community/community.component';
import { CageComponent } from './components/home/cage/cage.component';
import { PostComponent } from './components/community/post/post.component';
import { PostsComponent } from './components/community/posts/posts.component';
import { CreaturesComponent } from './components/breeders/creatures/creatures.component';
import { ItemDetailComponent } from './components/shop/item-detail/item-detail.component';
import { CreatePostComponent } from './components/community/create-post/create-post.component';
import { SignupComponent } from './components/auth/signup/signup.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },

  { path: '', redirectTo: '/home/all', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, children: [
    {path: ':species', component: CreaturesComponent}
  ]},

  { path: 'cage/:cageId', component: CageComponent },

  { path: 'shop', redirectTo: '/shop/cages', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent, children: [
    { path: 'cages', component: ItemsComponent},
    { path: 'foods', component: ItemsComponent},
    { path: 'materials', component: ItemsComponent},
    { path: 'temperatures', component: ItemsComponent},
    { path: 'cages/itemDetail/:itemId', component: ItemDetailComponent },
    { path: 'foods/itemDetail/:itemId', component: ItemDetailComponent },
    { path: 'temperatures/itemDetail/:itemId', component: ItemDetailComponent },
    { path: 'materials/itemDetail/:itemId', component: ItemDetailComponent },
  ]},


  { path: 'breeders', redirectTo: '/breeders/all', pathMatch: 'full' },
  { path: 'breeders/:species', component: BreedersComponent},

  { path: 'community', redirectTo: '/community/posts/announcement', pathMatch: 'full' },
  { path: 'community', component: CommunityComponent, children: [
    { path: 'posts/:boardType', component: PostsComponent },
    { path: 'posts/:boardType/post/:postId', component: PostComponent },
  ] },
  { path: 'community/createPost', component: CreatePostComponent },
  { path: 'community/editPost/:postId', component: CreatePostComponent},
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
