import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

  @Input() tipoLista: number;
  sliderTitulo: string;

  slides: {};
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

  constructor() { }

  ngOnInit(): void {
    if (this.tipoLista == 0) {
      this.sliderTitulo = 'Podcasts mais ouvidos';
      this.slides = [
        {img: "assets/img/podcasts/flow.jfif", podcast: 'Flow Podcast'},
        {img: "assets/img/podcasts/nerdcast.jfif", podcast: 'Nerdcast'},
        {img: "assets/img/podcasts/nao_ouvo.jfif", podcast: 'Não Ouvo'},
        {img: "assets/img/podcasts/the_joe_rogan_experience.jfif", podcast: 'The Joe Rogan Experience'},
        {img: "assets/img/podcasts/hipsters.jfif", podcast: 'Hipsters'},
        {img: "assets/img/podcasts/o_assunto.jfif", podcast: 'O Assunto'},
        {img: "assets/img/podcasts/the_joe_rogan_experience.jfif", podcast: 'The Joe Rogan Experience'},
        {img: "assets/img/podcasts/nerdcast.jfif", podcast: 'Nerdcast'},
        {img: "assets/img/podcasts/nao_ouvo.jfif", podcast: 'Não Ouvo'},
        {img: "assets/img/podcasts/the_joe_rogan_experience.jfif", podcast: 'The Joe Rogan Experience'},
        {img: "assets/img/podcasts/nerdcast.jfif", podcast: 'Nerdcast'}
      ];  

    } else if (this.tipoLista == 1) {
      this.sliderTitulo = 'Continuar ouvindo';
      this.slides = [
        {img: "assets/img/podcasts/na_palma_da_mari.jfif", podcast: 'Na Palma da Mari'},
        {img: "assets/img/podcasts/o_assunto.jfif", podcast: 'O Assunto'},
        {img: "assets/img/podcasts/a_mesa.jfif", podcast: 'A Mesa'},
        {img: "assets/img/podcasts/pizza_de_dados.jfif", podcast: 'Pizza de Dados'}
      ];
    }
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
}
