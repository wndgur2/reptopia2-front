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


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', redirectTo: '/shop/cages', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent, children: [
    { path: 'cages', component: CagesComponent },
    { path: 'foods', component: FoodsComponent },
    { path: 'temperatures', component: TemperaturesComponent },
    { path: 'materials', component: MaterialsComponent },
  ]},
  { path: 'breeders', component: BreedersComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
