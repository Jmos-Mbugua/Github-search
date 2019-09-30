import { UsersProfileService } from './../users-profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  profile: any;
  repos: any;
  username: any;
  

  constructor(private u_profileservice: UsersProfileService) {

    this.u_profileservice.getProfileDetails().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.u_profileservice.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
    
   }
   findUserProfile() {
     this.u_profileservice.updateProfile (this.username);
   }

  ngOnInit() {
  }

}
