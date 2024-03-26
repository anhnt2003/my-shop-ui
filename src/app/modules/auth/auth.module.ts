import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import {
  GoogleSigninButtonModule,
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    GoogleSigninButtonModule
  ]
})
export class AuthModule { }
