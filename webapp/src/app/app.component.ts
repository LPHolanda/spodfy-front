import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from './core/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-webapp';

  eventUrl: string;
  showMenu$: Observable<boolean>;

  constructor(private menuService: MenuService, private router: Router) {
    this.showMenu$ = menuService.getShowMenu();

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(event.url);
        this.eventUrl = event.url;
        const barraUrl = this.eventUrl.indexOf("/", 1);
        if (barraUrl > -1 ) {
          this.eventUrl = this.eventUrl.substring(0, barraUrl);
        }
      }
    });
  }
}
