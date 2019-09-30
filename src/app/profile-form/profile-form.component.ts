import { UsersProfileService } from './../users-profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  users: any;
  constructor(private userProfileService: UsersProfileService) { }

  ngOnInit() {
  }
  userSearchString(username: string){
   
    this.userProfileService.searchByUsername(username).then(data => {
      this.users = data; 
       console.log(this.users)
    }) 
  }

}
