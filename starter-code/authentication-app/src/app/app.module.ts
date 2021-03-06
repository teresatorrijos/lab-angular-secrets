import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./session.service";

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { RouterModule, Routes } from '@angular/router'

const Routes = [
    { path: '', component: AppComponent },
    { path: '/login', component: AuthLoginComponent },
    { path: '/signup', component: AuthSignupComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routes
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
