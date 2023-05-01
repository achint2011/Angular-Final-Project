import { Component, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { MainpageGaurd } from '../gaurd.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit{
  comments : any;
  showbox : boolean[] = [];
  noData : boolean = false;
  queryData : string = "";
  currPage : number = 1;
  hidecomment : boolean[] = [];
  constructor(public apiService: ApiService, private router: Router, private gaurd: MainpageGaurd){

  }
  ngOnInit(){
    if(this.queryData === ""){
      this.noData = false;
    this.apiService.getallPosts("posts").pipe(
      tap((response)=>{
        this.apiService.posts = response.posts;
        console.log(this.apiService.posts);
        this.apiService.length = response.length;
      })
    ).subscribe();

    }
  }
  onShowComment(id:number){
    this.noData = false;
    this.showbox[id] = true;
    this.hidecomment[id] = true;
    this.apiService.getallcomments("comments").pipe(
      tap((response)=>{
        this.comments = response.comments[id].body;
        console.log(this.comments);
      })
    ).subscribe();
  }
  hideBox(id:number){
    this.showbox[id] = false;
    this.hidecomment[id] = false;
  }
  onDelete(id:number){
    this.apiService.posts.splice(id, 1);
  }
  onSubmit(queryForm:any){
    this.apiService.searchpost("posts/search?q=",this.queryData).pipe(
      tap((response)=>{
        this.apiService.posts = response.posts;
        console.log(this.apiService.posts);
      })
    ).subscribe();
  }
  onAddNewPost(){
    this.gaurd.buttonclicked = true;
    this.router.navigate(['addnewpost']);
  }
}
