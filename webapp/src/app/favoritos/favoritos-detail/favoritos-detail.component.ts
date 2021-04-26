import { Component, OnInit } from '@angular/core';
import { Favoritos } from 'src/app/core/models/favoritos';
import { MenuService } from 'src/app/core/menu/menu.service';
import { Podcast } from 'src/app/core/models/podcast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos-detail',
  templateUrl: './favoritos-detail.component.html',
  styleUrls: ['./favoritos-detail.component.css']
})
export class FavoritosDetailComponent implements OnInit {

  isShown = false;
  favorito: Favoritos;
  auxShowMenu: boolean = true;
  iconNotificationOutlined: boolean = true;
  auxFavorite: boolean = true;
  iconFavorite: string;
  
  constructor(private menuService: MenuService, private router: Router) { }
  
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.auxShowMenu = true;
    this.menuService.setShowMenu(this.auxShowMenu);
  }

  toggle(favorito?: Favoritos) {
    this.favorito = favorito;
    this.isShown = !this.isShown;
    this.auxShowMenu = !this.auxShowMenu;

    this.menuService.setShowMenu(this.auxShowMenu);
  }

  toggleNotification(){
    this.iconNotificationOutlined = !this.iconNotificationOutlined;

    if (this.favorito.notificacao == null) {
      this.favorito.notificacao = [];

    } else {
      this.favorito.notificacao = null;
    }

  }

  toggleFavorite() {
    if(this.auxFavorite) {
      this.iconFavorite = 'favorite_border';

    } else {
      this.iconFavorite = 'favorite';
    }

    this.auxFavorite = !this.auxFavorite;
  }

  setNotification(diaDaSemana: number) {
    let temDiaDaSemana = false;

    this.favorito.notificacao.forEach(dia => {
      if(dia == diaDaSemana) {
        
        this.favorito.notificacao = this.favorito.notificacao.filter(notif => notif != diaDaSemana);
        temDiaDaSemana = true;
      }
    });

    if(!temDiaDaSemana) {
      this.favorito.notificacao.push(diaDaSemana);
    }

    console.log(this.favorito.notificacao);
  }

  notificacaoTemDia(diaDaSemana: number): boolean {
    let temDia = false;
    this.favorito.notificacao.forEach(notif => {
      if (notif == diaDaSemana) {
        temDia = true;
      }
    });

    return temDia;
  }

  goToPodcast(podcast: Podcast) {
    this.router.navigateByUrl('/podcast/' + podcast.id, { state: { podcast } });
  }
}
