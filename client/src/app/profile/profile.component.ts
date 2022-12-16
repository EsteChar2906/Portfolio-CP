import { Component, OnInit } from '@angular/core';
import { data, socialMedia } from '../DataUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  userPhoto: string;
  userName: string;
  userRol: string;
  userLocation: string;
  userEmail: string;
  gitHub: string;
  linkedin: string;

  constructor() {
    this. userPhoto = data.userPhoto;
    this.userName = data.userName;
    this.userRol = data.userRol;
    this.userLocation = data.userLocation;
    this.userEmail = data.userEmail;
    this.gitHub = socialMedia.gitHub;
    this.linkedin = socialMedia.linkedin;
  }

  ngOnInit(){}
}
