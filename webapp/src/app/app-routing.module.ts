import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { ErrorComponent } from './core/error/error.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { PlayerComponent } from './player/player.component';
import { PodcastComponent } from './podcast/podcast.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'autenticacao'
  },

  { 
    path: 'autenticacao', 
    component: AutenticacaoComponent,
    data: {
      title: 'Autenticação'
    }
  },

  { 
    path: 'home', 
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },

  { 
    path: 'pesquisar', 
    component: PesquisarComponent,
    data: {
      title: 'Pesquisar'
    }
  },

  { 
    path: 'favoritos', 
    component: FavoritosComponent,
    data: {
      title: 'Favoritos'
    }
  },

  { 
    path: 'podcast/:idPodcast',
    component: PodcastComponent,
    data: {
      title: 'Podcast'
    }
  },

  { 
    path: 'player', 
    component: PlayerComponent,
    data: {
      title: 'Player'
    }
  },

  // LAZY LOADING
  // {
  //   path: 'pesquisar',
  //   loadChildren: './pesquisar/pesquisar.module#PesquisarModule'
  // },

  // {
  //   path: 'favoritos',
  //   loadChildren: './favoritos/favoritos.module#FavoritosModule'
  // },
  
  // { 
  //   path: 'player', 
  //   loadChildren: './player/player.module#PlayerModule',
  //   data: {
  //     title: 'Player'
  //   }
  // },

  { 
    path: 'error', 
    component: ErrorComponent,
    data: {
      title: 'Error'
    }
  },

  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
