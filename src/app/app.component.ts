import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private pelisS: PeliculasService) {
    // this.pelisS.getPopulares().subscribe(
    //   res => {
    //     console.log(res)
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // );

    // this.pelisS.buscarPelicula('mascotas').subscribe(
    //   res => {
    //     console.log(res)
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
  }
  title = 'pelisApp';
}
