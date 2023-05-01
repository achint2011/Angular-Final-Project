import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LogoutComponent } from './login/logout/logout.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewpostComponent } from './mainpage/newpost/newpost.component';
import { MainpageGaurd } from './gaurd.service';

const routes: Routes = [
  {path : '' , component : loginComponent},
  {path : 'logout', component :LogoutComponent},
  {path : 'mainpage', component : MainpageComponent, canDeactivate: [MainpageGaurd],
  canActivate: [MainpageGaurd],},
  {path : 'addnewpost', component : NewpostComponent},
  {path : '**', component :PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
