import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosComponent } from './favoritos.component';
import { FavoritosDetailComponent } from './favoritos-detail/favoritos-detail.component';
import { FavoritosRoutingModule } from './favoritos.routing.module';
import { CoreModule } from '../core/core.module';
import { CardListComponent } from './card-list/card-list.component';
import { PodcastModule } from '../podcast/podcast.module';
import { ActiveGreenModule } from '../shared/directives/active-green.module';

@NgModule({
    declarations: [
        FavoritosComponent,
        FavoritosDetailComponent,
        CardListComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule,
        FavoritosRoutingModule,
        PodcastModule,
        ActiveGreenModule
    ],
    exports: [
        FavoritosComponent,
        FavoritosDetailComponent,
        CardListComponent
    ]
})
export class FavoritosModule {
    
}