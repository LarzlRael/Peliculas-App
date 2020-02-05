import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  peliculas: any[] = []
  constructor(
    private sp: PeliculasService,
    private activaR: ActivatedRoute,
  ) {
    this.activaR.params.subscribe(params => {
      console.log(params);
      if (params['text']) {
        this.buscar = params['text'];
        this.buscarPelicula();
      }
    })

  }
  buscar: string = ""
  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }
    this.sp.buscarPelicula(this.buscar).subscribe(
      res => {
        this.peliculas = res;
        console.log(this.peliculas)
      },
      err => {
        console.log(err)
      }
    );
  }
}
