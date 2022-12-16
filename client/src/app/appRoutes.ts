import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HabilitiesComponent } from './habilities/habilities.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
{path: "about", component: AboutComponent},
{path: "contact", component: ContactComponent},
{path: "habilities", component: HabilitiesComponent},
{path: "project", component: ProyectosComponent},
{path: "**", component: AboutComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
