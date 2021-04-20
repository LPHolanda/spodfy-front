import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { PesquisarModule } from './pesquisar/pesquisar.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PodcastModule } from './podcast/podcast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacaoModule,
    HomeModule,
    PesquisarModule,
    FavoritosModule,
    CoreModule,
    PodcastModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
