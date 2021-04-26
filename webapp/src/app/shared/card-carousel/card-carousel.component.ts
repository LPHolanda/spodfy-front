import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Podcast } from 'src/app/core/models/podcast';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

  @Input() tipoLista: number;
  sliderTitulo: string;

  slides: Podcast[];
  slideConfig = {
    "slidesToShow": 6.5, 
    "slidesToScroll": 2,
    "swipeToSlide": true,
    "arrows": false,
    "infinite": false,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 4.5, 
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2.5, 
          "slidesToScroll": 2
        }
      }
    ]
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.tipoLista == 0) {
      this.sliderTitulo = 'Podcasts mais ouvidos';
      this.slides = [
        {
          id: 2,
          nome_podcast: 'Flow',
          nome_produtor: 'Flow',
          descricao: 'Só conversa',
          categoria: 'Humor',
          img: 'assets/img/podcasts/flow.jfif'
        },
        {
          id: 7,
          nome_podcast: 'Nerdcast',
          nome_produtor: 'JovemNerd',
          descricao: 'O mundo vira piada no Jovem Nerd',
          categoria: 'Humor',
          img: 'assets/img/podcasts/nerdcast.jfif'
        },
        {
          id: 6,
          nome_podcast: 'Não Ouvo',
          nome_produtor: 'Não Salvo',
          descricao: 'As discussões mais aleatórias sobre assuntos aleatórios',
          categoria: 'Humor',
          img: 'assets/img/podcasts/nao_ouvo.jfif'
        },
        {
          id: 10,
          nome_podcast: 'The Joe Rogan Experience',
          nome_produtor: 'Joe Rogan',
          descricao: 'The official podcast of comedian Joe Rogan. Follow the Joe Rogan clips show page for some of the best moments from the episodes.',
          categoria: 'Humor',
          img: 'assets/img/podcasts/the_joe_rogan_experience.jfif'
        },
        {
          id: 3,
          nome_podcast: 'Hipsters',
          nome_produtor: 'Alura',
          descricao: 'Conteúdo de qualidade com a Alura',
          categoria: 'Tecnologia',
          img: 'assets/img/podcasts/hipsters.jfif'
        },
        {
          id: 8,
          nome_podcast: 'O Assunto',
          nome_produtor: 'Globo',
          descricao: 'Notícias diárias sobre o que está acontecendo no Brasil e no mundo.',
          categoria: 'Notícias',
          img: 'assets/img/podcasts/o_assunto.jfif'
        },
        {
          id: 10,
          nome_podcast: 'The Joe Rogan Experience',
          nome_produtor: 'Joe Rogan',
          descricao: 'The official podcast of comedian Joe Rogan. Follow the Joe Rogan clips show page for some of the best moments from the episodes.',
          categoria: 'Humor',
          img: 'assets/img/podcasts/the_joe_rogan_experience.jfif'
        },
        {
          id: 7,
          nome_podcast: 'Nerdcast',
          nome_produtor: 'JovemNerd',
          descricao: 'O mundo vira piada no Jovem Nerd',
          categoria: 'Humor',
          img: 'assets/img/podcasts/nerdcast.jfif'
        },
        {
          id: 6,
          nome_podcast: 'Não Ouvo',
          nome_produtor: 'Não Salvo',
          descricao: 'As discussões mais aleatórias sobre assuntos aleatórios',
          categoria: 'Humor',
          img: 'assets/img/podcasts/nao_ouvo.jfif'
        },
        {
          id: 10,
          nome_podcast: 'The Joe Rogan Experience',
          nome_produtor: 'Joe Rogan',
          descricao: 'The official podcast of comedian Joe Rogan. Follow the Joe Rogan clips show page for some of the best moments from the episodes.',
          categoria: 'Humor',
          img: 'assets/img/podcasts/the_joe_rogan_experience.jfif'
        },
        {
          id: 7,
          nome_podcast: 'Nerdcast',
          nome_produtor: 'JovemNerd',
          descricao: 'O mundo vira piada no Jovem Nerd',
          categoria: 'Humor',
          img: 'assets/img/podcasts/nerdcast.jfif'
        }
      ];  

    } else if (this.tipoLista == 1) {
      this.sliderTitulo = 'Continuar ouvindo';
      this.slides = [
        {
          id: 5,
          nome_podcast: 'Na Palma da Mari',
          nome_produtor: 'CNN',
          descricao: 'A CNN Brasil tem podcast sobre cultura pop sim! Cinema, HQs, games, música, livros, séries - tudo o que a galera ama comentar. Toda semana, sempre às quintas, Mari Palma recebe convidados para um bate-papo sobre como a cultura pop e o mundo digital se relacionam com todos os aspectos da sociedade.',
          categoria: 'Notícias',
          img: 'assets/img/podcasts/na_palma_da_mari.jfif'
        },
        {
          id: 8,
          nome_podcast: 'O Assunto',
          nome_produtor: 'Globo',
          descricao: 'Notícias diárias sobre o que está acontecendo no Brasil e no mundo.',
          categoria: 'Notícias',
          img: 'assets/img/podcasts/o_assunto.jfif'
        },
        {
          id: 1,
          nome_podcast: 'A Mesa',
          nome_produtor: 'Globo',
          descricao: 'Saiba tudo o que acontece no mundo da bola no podcast a mesa, com André Rizek e PVC',
          categoria: 'Esportes',
          img: 'assets/img/podcasts/a_mesa.jfif'
        },
        {
          id: 9,
          nome_podcast: 'Pizza de Dados',
          nome_produtor: 'Pizza de Dados',
          descricao: 'Assuntos variados sobre tecnologia',
          categoria: 'Tecnologia',
          img: 'assets/img/podcasts/pizza_de_dados.jfif'
        }
      ];
    }
  }

  goToPodcast(podcast: Podcast) {
    // this.router.navigate(['/podcast', podcast.id], { queryParams: podcast });
    this.router.navigateByUrl('/podcast/' + podcast.id, { state: { podcast } });
  }
  

  // ============================ MÉTODOS DO SLICK SLIDER ==========================
  slickInit(e) {
    // console.log('slick initialized');
  }
  
  breakpoint(e) {
    // console.log('breakpoint');
  }
  
  afterChange(e) {
    // console.log('afterChange');
  }
  
  beforeChange(e) {
    // console.log('beforeChange');
  }

  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
}
