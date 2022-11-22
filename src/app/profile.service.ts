import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = 'https://api.github.com/';
  // suffixUrl = '?client_id='+this.clientId+'&client_secret='+this.clientSecret;

  constructor(private http:HttpClient) {}

  getUserDetails(username:string):Observable<any>{
    return this.http.get<any>(this.baseUrl+'users/'+username);
  }

  getUserRepos(username:string):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'users/'+username+'/repos');
  }

  // updateUserName(username:string){
  //   this.username = username;
  // }

}
