import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseURL = 'https://dummyjson.com/';
  username :string = "";
  password :string = "";
  title :string = "";
  description :string = "";
  userId :any;
  userid : any;
  imgpath :string = "";
  posts : any;
  length : any;
  constructor(private http: HttpClient) {
  }
  getloginToken(path : string , username: string  , password : string,  params : any): Observable<any>{
    const url = `${this.baseURL}${path}`;
    this.username = username;
    this.password = password;
    const headers  = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify({
      username ,
      password
    });

    return this.http.post<any>(url , body , {headers});
}
getallPosts(path : string): Observable<any>{
  const url = `${this.baseURL}${path}`;
  return this.http.get(url);
}
getallcomments(path : string,): Observable<any>{
  const url = `${this.baseURL}${path}`;
  return this.http.get(url);
}
searchpost(path : string, query:string): Observable<any>{
  const url = `${this.baseURL}${path}${query}`;
  return this.http.get(url);
}
addnewpost(path : string, title : string,description:string): Observable<any>{
  const url = `${this.baseURL}${path}`;
  this.title = title;
    this.userId = this.userid;
    const headers  = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  const body = {
    title:title,
    userId:this.userid,
    body: description
  };
  return this.http.post<any>(url,body,{headers});
}
}
