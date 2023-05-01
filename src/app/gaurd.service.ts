import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MainpageComponent } from './mainpage/mainpage.component';

@Injectable({
  providedIn: 'root',
})
export class MainpageGaurd implements CanDeactivate<MainpageComponent> {
  isAuthenticated: boolean;
  buttonclicked: boolean = false;

  constructor(private router: Router) {
    this.isAuthenticated = false;
  }

  canDeactivate(
    component: MainpageComponent
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.buttonclicked){
      return true;
    }
    else{
      return confirm('Do you want to logout from this application');
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.isAuthenticated) {
      this.router.navigate(['/']);
    }
    return this.isAuthenticated;
  }
}
