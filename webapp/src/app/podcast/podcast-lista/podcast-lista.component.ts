import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Episodios } from 'src/app/core/models/episodios';
import { Podcast } from 'src/app/core/models/podcast';

@Component({
  selector: 'app-podcast-lista',
  templateUrl: './podcast-lista.component.html',
  styleUrls: ['./podcast-lista.component.css']
})
export class PodcastListaComponent implements OnInit {

  @Input() podcast: Podcast;

  lerMaisBool = true;
  lerMaisTxt = 'Ler mais';
  sliceNum = 80;
  pontuacao = '...';

  episodios: Episodios[] = [{
    id: 1,
    nome: 'Episódio xyz',
    descricao: 'Falamos muito sobre xyz, mas não se engane, também tem abc, def, ghi, e várias outras. Na verdade, todas as outras. Um oferecimento de Spotify: Escutar muda tudo.',
    img: 'assets/img/podcasts/episodios/nerdcast_768.jfif',
    duracao: '1:48:00',
    data_lancamento: new Date(),
    id_podcast: 7
  },
  {
    id: 2,
    nome: 'Episódio abc',
    descricao: 'Falamos muito sobre xyz, mas não se engane, também tem abc, def, ghi, e várias outras. Na verdade, todas as outras. Um oferecimento de Spotify: Escutar muda tudo.',
    img: 'assets/img/podcasts/nao_ouvo_218.jfif',
    duracao: '48:00',
    data_lancamento: new Date(),
    id_podcast: 7
  },
  {
    id: 3,
    nome: 'Episódio def',
    descricao: 'Falamos muito sobre xyz, mas não se engane, também tem abc, def, ghi, e várias outras. Na verdade, todas as outras. Um oferecimento de Spotify: Escutar muda tudo.',
    img: 'assets/img/podcasts/nao_ouvo_218.jfif',
    duracao: '2:02:00',
    data_lancamento: new Date(),
    id_podcast: 7
  },
  {
    id: 4,
    nome: 'Episódio ghi',
    descricao: 'Falamos muito sobre xyz, mas não se engane, também tem abc, def, ghi, e várias outras. Na verdade, todas as outras. Um oferecimento de Spotify: Escutar muda tudo.',
    img: 'assets/img/podcasts/nerdcast_768.jfif',
    duracao: '1:13:00',
    data_lancamento: new Date(),
    id_podcast: 7
  },
  {
    id: 5,
    nome: 'Episódio jkl',
    descricao: 'Falamos muito sobre xyz, mas não se engane, também tem abc, def, ghi, e várias outras. Na verdade, todas as outras. Um oferecimento de Spotify: Escutar muda tudo.',
    img: 'assets/img/podcasts/nerdcast_768.jfif',
    duracao: '33:00',
    data_lancamento: new Date(),
    id_podcast: 7
  }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  lerMais(descricao: string) {
    if(this.lerMaisBool) {
      this.sliceNum = descricao.length;
      this.pontuacao = '';
      this.lerMaisTxt = 'Ler menos';

    } else {
      this.sliceNum = 80;
      this.pontuacao = '...';
      this.lerMaisTxt = 'Ler mais';
    }

    this.lerMaisBool = !this.lerMaisBool;
  }

  play(episodio?: any) {
    this.router.navigateByUrl('/player', { state: { episodio } });
  }
}
