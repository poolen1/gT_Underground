import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

import { UserProfile } from '../models/user-profile.model';
import { ProfileRequest } from './profile-request';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile = new UserProfile();
  private localStorageData: string = "";
  private storageKey: string = "userName";

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    let userName = this.getLoggedInUserName();
    var profileRequest = <ProfileRequest>{};
    profileRequest.userName = userName!;
    this.profileService.getProfile(profileRequest)
      .subscribe(data => {
        this.userProfile.firstName = data.profile.firstName;
        this.userProfile.lastName = data.profile.lastName;
        this.userProfile.userName = data.profile.userName;
        this.userProfile.email = data.profile.email;
        this.userProfile.phone = data.profile.phone;
      });
  }

  getLoggedInUserName() {
    let data1 = {
      'token': 'userName',
      'name': 'name'
    };
    let data = localStorage.getItem(this.storageKey);
    return data;
  }
}
