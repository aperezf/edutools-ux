import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
