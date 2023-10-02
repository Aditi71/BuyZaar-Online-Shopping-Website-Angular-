import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MenuHAComponent } from './menu-ha/menu-ha.component';
import { MenuClothingComponent } from './menu-clothing/menu-clothing.component';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu-ha', component: MenuHAComponent}, 
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'menu-cloth', component: MenuClothingComponent},
  { path: 'clothes-detail/:id', component: ClothesDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
