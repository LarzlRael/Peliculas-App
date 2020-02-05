import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pelicula:any;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  buscarPelicula(text: string) {
    if (text.length === 0) {
      return;
    }
    this.route.navigate(['buscar', text]);
  }

}
