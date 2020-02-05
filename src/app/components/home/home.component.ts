import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ninos: [];
  polulares: [];
  constructor(
    private pelisS: PeliculasService
  ) { }

  ngOnInit() {
    this.pelisS.getPopulares().subscribe(
      peli => {
        this.polulares = peli
      },
      err => {
        console.log(err)
      }
    );

    this.pelisS.getCartelera().subscribe(
      peli => {
        console.log(peli)
      },
      err => {
        console.log(err)
      }
    );



    this.pelisS.getPopularesNinos().subscribe(
      ninios => {
        this.ninos = ninios;
        //console.log(this.ninos)
      },
      err => {
        console.log(err)
      }
    )
  }

}
