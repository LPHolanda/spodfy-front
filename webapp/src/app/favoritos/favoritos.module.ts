import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosComponent } from './favoritos.component';
import { FavoritosDetailComponent } from './favoritos-detail/favoritos-detail.component';
import { FavoritosRoutingModule } from './favoritos.routing.module';
import { CoreModule } from '../core/core.module';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
    declarations: [
        FavoritosComponent,
        FavoritosDetailComponent,
        CardListComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule,
        FavoritosRoutingModule
    ],
    exports: [
        FavoritosComponent,
        FavoritosDetailComponent,
        CardListComponent
    ]
})
export class FavoritosModule {
    
}