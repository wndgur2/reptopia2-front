import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedersComponent } from './components/breeders/breeders.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserComponent } from './components/user/user.component';
import { CagesComponent } from './components/shop/cages/cages.component';
import { FoodsComponent } from './components/shop/foods/foods.component';
import { MaterialsComponent } from './components/shop/materials/materials.component';
import { TemperaturesComponent } from './components/shop/temperatures/temperatures.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommunityComponent } from './components/community/community.component';
import { CageComponent } from './components/home/cage/cage.component';
import { CageDetailComponent } from './components/shop/cages/cage-detail/cage-detail.component';
import { FoodDetailComponent } from './components/shop/foods/food-detail/food-detail.component';
import { TemperatureDetailComponent } from './components/shop/temperatures/temperature-detail/temperature-detail.component';
import { MaterialDetailComponent } from './components/shop/materials/material-detail/material-detail.component';
import { PostComponent } from './components/community/post/post.component';
import { PostsComponent } from './components/community/posts/posts.component';
import { CreaturesComponent } from './components/breeders/creatures/creatures.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},

  { path: 'cage/:cageId', component: CageComponent },

  { path: 'shop', redirectTo: '/shop/cages', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent, children: [
    { path: 'cages', component: CagesComponent},
    { path: 'foods', component: FoodsComponent},
    { path: 'temperatures', component: TemperaturesComponent},
    { path: 'materials', component: MaterialsComponent},
  ]},

  { path: 'shop/cages/cageDetail/:itemId', component: CageDetailComponent },
  { path: 'shop/foods/foodDetail/:itemId', component: FoodDetailComponent },
  { path: 'shop/temperatures/temperatureDetail/:itemId', component: TemperatureDetailComponent },
  { path: 'shop/materials/materialDetail/:itemId', component: MaterialDetailComponent },

  { path: 'breeders', redirectTo: '/breeders/creatures/all', pathMatch: 'full' },
  { path: 'breeders', component: BreedersComponent, children:[
    {path: 'creatures/:species', component: CreaturesComponent}
  ] },

  { path: 'community', redirectTo: '/community/posts/announcement', pathMatch: 'full' },
  { path: 'community', component: CommunityComponent, children: [
    { path: 'posts/:boardType', component: PostsComponent },
    { path: 'posts/:boardType/post/:postId', component: PostComponent },
  ] },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
