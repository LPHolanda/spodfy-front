import { Component, Input, OnInit } from '@angular/core';
import { Podcast } from 'src/app/core/models/podcast';

@Component({
  selector: 'app-podcast-description',
  templateUrl: './podcast-description.component.html',
  styleUrls: ['./podcast-description.component.css']
})
export class PodcastDescriptionComponent implements OnInit {

  @Input() podcast: Podcast;

  constructor() { }

  ngOnInit(): void {
  }

}
