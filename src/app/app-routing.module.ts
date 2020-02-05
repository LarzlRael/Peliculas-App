import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'pelicula/:id/:pag',component:PeliculaComponent},
  {path:'pelicula/:id/:pag/:busqueda',component:PeliculaComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'buscar/:text',component:BuscarComponent},
  {path:'**',pathMatch:'full',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
