import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  id: string;
  pelicula: any = [];
  regresarA: string = "";
  busqueda:string=''
  constructor(
    private service: PeliculasService,
    private activaR: ActivatedRoute,
  ) {
    this.activaR.params.subscribe(
      params => {
        if(params['busqueda']){
          this.busqueda=params['busqueda']
        }
        this.id = params.id;;
        this.regresarA = params['pag'];
      }
    )
  }

  ngOnInit() {
    this.service.getPelicula(this.id).subscribe(
      (peli) => {
        this.pelicula = peli,
          console.log(this.pelicula)
      },
      err => {
        console.log(err)
      }
    )
  }

}
