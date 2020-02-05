import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
JsonpClientBackend
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "7135ebe6b690f38898f6ff3f63d33ff3";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(
    private http: HttpClient,
  ) { }

  // rutas pupulares
  // ==============================================================

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;


    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get(url);


  }
  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    console.log('Populares', url)
    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  };
  getPopularesNinos() {

    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  };
  // ==============================================================
  getPeliculaById(id: string | number) {
    console.log('id recibido' + id)
    const url = `https://api.themoviedb.org/3/find/${id}?api_key=${this.apikey}&language=es`;
    const uri = `
    https://api.themoviedb.org/3/find/${id}?api_key=${this.apikey}&language=en-US&external_source=imdb_id`
    console.log('haciendo peticion a ', uri);
    return this.http.get(uri)
    
  }


  buscarPelicula(text: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    console.log(url)
    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }
  getPelicula(id: string) {

    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es;`

    return this.http.get(url);

  }
}
