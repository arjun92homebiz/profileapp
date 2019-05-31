import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private router: Router) { }

userProfile: any={
  Name: "Arjun Prakash",
  ContactInfo: "arjun92homebiz@gmail.com",
  Bio: ""
}
getUserProfile(): any {
  return this.userProfile;
}

setUserProfile(): any {
  this.userProfile = this.userProfile.data

}
}
