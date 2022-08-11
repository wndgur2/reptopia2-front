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

import { ShopComponent } from './components/shop/shop.component';
import { BreedersComponent } from './components/breeders/breeders.component';
import { UserComponent } from './components/user/user.component';
import { CagesComponent } from './components/shop/cages/cages.component';
import { FoodsComponent } from './components/shop/foods/foods.component';
import { TemperaturesComponent } from './components/shop/temperatures/temperatures.component';
import { MaterialsComponent } from './components/shop/materials/materials.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
