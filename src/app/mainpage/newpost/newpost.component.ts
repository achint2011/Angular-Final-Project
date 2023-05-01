import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {
  constructor(private router:Router, private apiService: ApiService){}
  apiData : any;
  addnewpostform = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })
  onSubmit(){
    this.apiService.addnewpost("posts/add",this.addnewpostform.value.title!,this.addnewpostform.value.description!).pipe(
      tap(
        (response) => {
          this.apiData = response;
          console.log(this.apiData);
          this.apiService.posts.push(this.apiData);
          console.log(this.apiService.posts);
        }
      )
    )
    .subscribe();
    this.router.navigate(['mainpage']);
  }
}
