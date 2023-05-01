import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { MainpageGaurd } from '../gaurd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {
  apiData :any;
  errorMessage :boolean = false;
  constructor(private apiService: ApiService, private router: Router, private gaurd: MainpageGaurd){

  }
  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
userLogin(){
  this.apiService
  .getloginToken('auth/login', this.loginform.value.username!, this.loginform.value.password!, '')
  .pipe(
    tap(
      (response) => {
        this.apiData = response;
        console.log(this.apiData);
        this.apiService.imgpath = response.image;
        this.apiService.userid = this.apiData.id;
        if (this.apiData) {
          this.errorMessage = false;
          this.gaurd.isAuthenticated = true;
          this.router.navigate(['mainpage']);
        }
      },
      (error) => {
        this.errorMessage = true;
        setTimeout(() => {
          this.errorMessage = false;
        }, 5000);
        this.loginform.reset();
        this.loginform.value.password = '';
      }
    )
  )
  .subscribe();
}
}
