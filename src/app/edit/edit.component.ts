import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editProfile(newProfile: string, index: number): any {
    this.userProfile.name = newProfile;
    return this.userProfile;

  }
}
