import { Component, OnInit } from '@angular/core';
import { data } from '../DataUser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user:string;

  constructor() {
    this.user = data.userName;
  }

  ngOnInit(){}
}
