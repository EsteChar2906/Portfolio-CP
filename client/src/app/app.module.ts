//este archivo me permite iniciar mi app angular
// al iniciar una appa se inicia un modulo
// este archivo es leido por el modulo principal de aplicacion "main.ts"
// se pueden cargar multiples cosas

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRoutes';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HabilitiesComponent } from './habilities/habilities.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
  AboutComponent,
  AppComponent,
  ContactComponent,
  HabilitiesComponent,
  NavComponent,
  ProfileComponent,
  ProyectosComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
