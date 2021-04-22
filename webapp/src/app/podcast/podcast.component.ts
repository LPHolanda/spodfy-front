import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Podcast } from '../core/models/podcast';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  podcast: Podcast;
  headerTitulo: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.podcast = this.router.getCurrentNavigation().extras.state.podcast;
    this.headerTitulo = this.podcast.nome_podcast;
  }

  ngOnInit(): void {}
}
