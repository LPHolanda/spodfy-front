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
      nome_podcast: 'A Mesa',
      nome_produtor: 'Globo',
      descricao: 'Saiba tudo o que acontece no mundo da bola no podcast a mesa, com André Rizek e PVC',
      categoria: 'Esportes',
      img: 'assets/img/podcasts/a_mesa.jfif'
    },
    {
      nome_podcast: 'Flow',
      nome_produtor: 'Flow',
      descricao: 'Só conversa',
      categoria: 'Humor',
      img: 'assets/img/podcasts/flow.jfif'
    },
    {
      nome_podcast: 'Hipsters',
      nome_produtor: 'Alura',
      descricao: 'Conteúdo de qualidade com a Alura',
      categoria: 'Tecnologia',
      img: 'assets/img/podcasts/hipsters.jfif'
    },
    {
      nome_podcast: 'Matando Robôs Gigantes',
      nome_produtor: 'Matando Robôs Gigantes',
      descricao: 'A mente do Didi.',
      categoria: 'Humor',
      img: 'assets/img/podcasts/matando_robos_gigantes.jfif'
    },
    {
      nome_podcast: 'Na Palma da Mari',
      nome_produtor: 'CNN',
      descricao: 'A CNN Brasil tem podcast sobre cultura pop sim! Cinema, HQs, games, música, livros, séries - tudo o que a galera ama comentar. Toda semana, sempre às quintas, Mari Palma recebe convidados para um bate-papo sobre como a cultura pop e o mundo digital se relacionam com todos os aspectos da sociedade.',
      categoria: 'Notícias',
      img: 'assets/img/podcasts/na_palma_da_mari.jfif'
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
      nome_podcast: 'O Assunto',
      nome_produtor: 'Globo',
      descricao: 'Notícias diárias sobre o que está acontecendo no Brasil e no mundo.',
      categoria: 'Notícias',
      img: 'assets/img/podcasts/o_assunto.jfif'
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
      podcast: this.listPodcast[3],
      notificacao: ['Sexta']
    },
    {
      podcast: this.listPodcast[4],
      notificacao: ['Quinta']
    },{
      podcast: this.listPodcast[5],
      notificacao: ['Sexta']
    },
    {
      podcast: this.listPodcast[6],
      notificacao: ['Quarta']
    },
    {
      podcast: this.listPodcast[7],
      notificacao: ['Terca']
    },
    {
      podcast: this.listPodcast[8],
      notificacao: ['Sexta']
    },
    {
      podcast: this.listPodcast[9],
      notificacao: ['Quinta']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
