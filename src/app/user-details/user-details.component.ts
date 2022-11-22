import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  details:any;
  repos:any = [];
  username:string ='';
  totalRepos:number=0
  page:number=1;

  constructor(private service:ProfileService) { }

  findUserDetails(){
    this.refreshDetails(this.username);
    this.refreshRepos(this.username);
  }

  ngOnInit(): void {
  }

  refreshDetails(username:string){
    this.service.getUserDetails(username).subscribe(profile => {
      this.details = profile;
    });
  }

  refreshRepos(username:string){
    this.service.getUserRepos(username).subscribe(repos => {
      this.repos = repos;
      this.totalRepos = repos.length;
    });
  }
}
