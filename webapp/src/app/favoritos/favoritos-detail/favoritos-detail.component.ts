import { Component, OnInit } from '@angular/core';
import { Favoritos } from 'src/app/core/models/favoritos';
import { MenuService } from 'src/app/core/menu/menu.service';

@Component({
  selector: 'app-favoritos-detail',
  templateUrl: './favoritos-detail.component.html',
  styleUrls: ['./favoritos-detail.component.css']
})
export class FavoritosDetailComponent implements OnInit {

  isShown = false;
  favorito: Favoritos;
  auxShowMenu: boolean = true;
  auxNotification: boolean = true;
  auxFavorite: boolean = true;
  iconFavorite: string;
  
  constructor(private menuService: MenuService) { }
  
  ngOnInit(): void {
  }

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
    this.auxNotification = !this.auxNotification;

    console.log(this.auxNotification);
  }

  toggleFavorite() {
    if(this.auxFavorite) {
      this.iconFavorite = 'favorite_border';

    } else {
      this.iconFavorite = 'favorite';
    }

    this.auxFavorite = !this.auxFavorite;

    console.log(this.iconFavorite);
  }
}
