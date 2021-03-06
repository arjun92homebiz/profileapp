import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  Providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  this.profiles = profileService.getUserProfiles() 

  ngOnInit() {
  }

}
