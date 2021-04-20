import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastListaComponent } from './podcast-lista/podcast-lista.component';
import { PodcastDescriptionComponent } from './podcast-description/podcast-description.component';
import { CoreModule } from '../core/core.module';
import { PodcastComponent } from './podcast.component';

@NgModule({
    declarations: [
        PodcastComponent,
        PodcastListaComponent,
        PodcastDescriptionComponent,
        PodcastComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule
    ],
    exports: [
        PodcastComponent,
        PodcastListaComponent,
        PodcastDescriptionComponent
    ],
    providers: [],
})
export class PodcastModule {}