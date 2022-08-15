import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { ShopComponent } from './components/shop/shop.component';
import { BreedersComponent } from './components/breeders/breeders.component';
import { UserComponent } from './components/user/user.component';
import { CagesComponent } from './components/shop/cages/cages.component';
import { FoodsComponent } from './components/shop/foods/foods.component';
import { TemperaturesComponent } from './components/shop/temperatures/temperatures.component';
import { MaterialsComponent } from './components/shop/materials/materials.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommunityComponent } from './components/community/community.component';
import { CageComponent } from './components/home/cage/cage.component';
import { CageDetailComponent } from './components/shop/cages/cage-detail/cage-detail.component';
import { TemperatureDetailComponent } from './components/shop/temperatures/temperature-detail/temperature-detail.component';
import { MaterialDetailComponent } from './components/shop/materials/material-detail/material-detail.component';
import { FoodDetailComponent } from './components/shop/foods/food-detail/food-detail.component';
import { PostsComponent } from './components/community/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    BreedersComponent,
    UserComponent,
    CagesComponent,
    FoodsComponent,
    TemperaturesComponent,
    MaterialsComponent,
    TemperaturesComponent,
    LoginComponent,
    SignupComponent,
    CommunityComponent,
    CageComponent,
    CageDetailComponent,
    TemperatureDetailComponent,
    MaterialDetailComponent,
    FoodDetailComponent,
    PostsComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
