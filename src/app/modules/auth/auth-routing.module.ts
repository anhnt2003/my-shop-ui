import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppMainComponent } from 'src/app/layouts/app-main/app-main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Đăng nhập'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Đăng ký'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
