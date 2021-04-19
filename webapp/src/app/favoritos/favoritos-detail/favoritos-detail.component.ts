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
  
  constructor(private menuService: MenuService) { }
  
  ngOnInit(): void {
  }

  toggle(favorito?: Favoritos) {
      this.favorito = favorito;
      this.isShown = !this.isShown;
      this.auxShowMenu = !this.auxShowMenu;

      this.menuService.setShowMenu(this.auxShowMenu);
    }
}
