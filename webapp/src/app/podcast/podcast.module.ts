import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastListaComponent } from './podcast-lista/podcast-lista.component';
import { PodcastDescriptionComponent } from './podcast-description/podcast-description.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        PodcastListaComponent,
        PodcastDescriptionComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule
    ],
    exports: [
        PodcastListaComponent,
        PodcastDescriptionComponent
    ],
    providers: [],
})
export class PodcastModule {}