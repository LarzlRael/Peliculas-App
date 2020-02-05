import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {
    let url = 'http://image.tmdb.org/t/p/w500/'
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
      return url + pelicula.poster_path
    } else {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png'
    }
  }

}
