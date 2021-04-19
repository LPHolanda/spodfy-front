import { Component, OnInit } from '@angular/core';
import { Favoritos } from '../../core/models/favoritos';
import { Podcast } from '../../core/models/podcast';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  listPodcast: Podcast[] = [
    {
      nome_podcast: 'Hipsters',
      nome_produtor: 'Alura',
      descricao: 'Conteúdo de qualidade com a Alura',
      categoria: 'Tecnologia',
      img: 'assets/img/podcasts/hipsters.jfif'
    },
    {
      nome_podcast: 'Não Ouvo',
      nome_produtor: 'Não Salvo',
      descricao: 'As discussões mais aleatórias sobre assuntos aleatórios',
      categoria: 'Humor',
      img: 'assets/img/podcasts/nao_ouvo.jfif'
    },
    {
      nome_podcast: 'Nerdcast',
      nome_produtor: 'JovemNerd',
      descricao: 'O mundo vira piada no Jovem Nerd',
      categoria: 'Humor',
      img: 'assets/img/podcasts/nerdcast.jfif'
    },
    {
      nome_podcast: 'Pizza de Dados',
      nome_produtor: 'Pizza de Dados',
      descricao: 'Assuntos variados sobre tecnologia',
      categoria: 'Tecnologia',
      img: 'assets/img/podcasts/pizza_de_dados.jfif'
    },
    {
      nome_podcast: 'The Joe Rogan Experience',
      nome_produtor: 'Joe Rogan',
      descricao: 'The official podcast of comedian Joe Rogan. Follow the Joe Rogan clips show page for some of the best moments from the episodes.',
      categoria: 'Humor',
      img: 'assets/img/podcasts/the_joe_rogan_experience.jfif'
    }
  ];


  listFavoritos: Favoritos[] = [
    {
      podcast: this.listPodcast[0],
      notificacao: ['Quarta']
    },
    {
      podcast: this.listPodcast[1],
      notificacao: ['Terca']
    },
    {
      podcast: this.listPodcast[2],
      notificacao: ['Sexta']
    },
    {
      podcast: this.listPodcast[3],
      notificacao: ['Quinta']
    },{
      podcast: this.listPodcast[4],
      notificacao: ['Sexta']
    },
    {
      podcast: this.listPodcast[0],
      notificacao: ['Quarta']
    },
    {
      podcast: this.listPodcast[1],
      notificacao: ['Terca']
    },
    {
      podcast: this.listPodcast[2],
      notificacao: ['Sexta']
    },
    {
      podcast: this.listPodcast[3],
      notificacao: ['Quinta']
    },{
      podcast: this.listPodcast[4],
      notificacao: ['Sexta']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
