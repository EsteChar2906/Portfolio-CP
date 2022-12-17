import { Component, OnInit } from '@angular/core';
import { projects } from '../DataUser';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  project: any[];


  constructor(){
    this.project = projects;
  }

  ngOnInit(){}
}
