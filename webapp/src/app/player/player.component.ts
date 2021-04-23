import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Episodios } from '../core/models/episodios';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  episodio: Episodios;
  headerTitulo: string;
  play = true;

  constructor(private router: Router) {
    this.episodio = this.router.getCurrentNavigation().extras.state.episodio;
    this.headerTitulo = this.episodio.nome;
  }

  ngOnInit(): void {
  }

  playPause() {
    this.play = !this.play;
  }

}