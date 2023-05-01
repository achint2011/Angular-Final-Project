import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NewpostComponent } from './mainpage/newpost/newpost.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    LogoutComponent,
    PageNotfoundComponent,
    MainpageComponent,
    NavbarComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
