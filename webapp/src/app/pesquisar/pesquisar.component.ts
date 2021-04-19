import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  headerTitulo = 'Pesquisar';

  categorias = [
    {
      nome: 'Cultura Pop',
      img: 'assets/img/icons/cultura_pop.png'
    },
    {
      nome: 'Esportes',
      img: 'assets/img/icons/esportes.png'
    },
    {
      nome: 'Idiomas',
      img: 'assets/img/icons/idiomas.png'
    },
    {
      nome: 'Negócios',
      img: 'assets/img/icons/negocios.png'
    },
    {
      nome: 'Política',
      img: 'assets/img/icons/politica.png'
    },
    {
      nome: 'Tecnologia',
      img: 'assets/img/icons/tecnologia.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    document.getElementById("fname").focus();
  }

}
