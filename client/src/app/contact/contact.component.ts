import { Component, OnInit } from '@angular/core';
import { data } from '../DataUser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userEmail: string;

  constructor(){
    this.userEmail = data.userEmail;
  }

  ngOnInit(){}

}
