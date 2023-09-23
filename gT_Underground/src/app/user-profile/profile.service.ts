import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

import { UserProfile } from '../models/user-profile.model';
import { ProfileRequest } from './profile-request';
import { ProfileResult } from './profile-result';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: UserProfile = new UserProfile();

  constructor(
    protected http: HttpClient
  ) {
  }

  getProfile(item: ProfileRequest): Observable<ProfileResult>
  {
    var url = environment.baseUrl + "api/Account/Profile";

    var result = this.http.post<ProfileResult>(url, item);

    return result;
  }
}
