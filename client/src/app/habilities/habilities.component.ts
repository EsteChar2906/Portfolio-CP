import { Component, OnInit } from '@angular/core';
import { habilities } from '../DataUser';

@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.css']
})
export class HabilitiesComponent {
  skills: any[];

  constructor(){
    this.skills = habilities;
  }

  ngOnInit(){}

}
